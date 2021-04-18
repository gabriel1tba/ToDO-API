import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TodosRepository from '../repositories/TodosRepository';
import CreateTodoService from '../services/CreateTodoService';
import UpdateTodoService from '../services/UpdateTodoService';

const todosRouter = Router();

todosRouter.post('/', async (request, response) => {
  try {
    const { user_id, title, description } = request.body;

    const CreateTodo = new CreateTodoService();

    const todo = await CreateTodo.execute({ user_id, title, description });

    return response.json(todo);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

todosRouter.get('/', async (request, response) => {
  try {
    const { user_id } = request.body;

    const todosRepository = getCustomRepository(TodosRepository);

    const checkIdExist = await todosRepository.findOne({ where: { user_id } });

    if (!checkIdExist) {
      throw new Error('Não existe nenhuma lista com esse ID de usuário.');
    }

    const todos = await todosRepository.find({ where: { user_id } });

    return response.json(todos);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

todosRouter.patch('/', async (request, response) => {
  try {
    const { id, title, description } = request.body;

    const todosRepository = getCustomRepository(TodosRepository);

    const UpdateTodo = new UpdateTodoService();

    const todo = await UpdateTodo.execute({ id, title, description });

    return response.json(todo);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default todosRouter;
