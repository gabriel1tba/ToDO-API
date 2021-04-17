import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TodosRepository from '../repositories/TodosRepository';
import CreateTodoService from '../services/CreateTodoService';

const todosRouter = Router();

todosRouter.get('/', async (request, response) => {
  const todosRepository = getCustomRepository(TodosRepository);

  const todos = await todosRepository.find();

  return response.json(todos);
});

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

export default todosRouter;
