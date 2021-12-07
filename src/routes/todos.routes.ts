import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import routeAuthenticated from '../middlewares/routeAuthenticated';

import TodosRepository from '../repositories/TodosRepository';
import CreateTodoService from '../services/CreateTodoService';
import UpdateTodoService from '../services/UpdateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';

import Errors from '../erros/Errors';

const todosRouter = Router();

todosRouter.use(routeAuthenticated);

todosRouter.post('/', async (request, response) => {
  try {
    const { user_id, completed, title, description } = request.body;

    const CreateTodo = new CreateTodoService();

    const todo = await CreateTodo.execute({
      user_id,
      completed,
      title,
      description,
    });

    return response.json(todo);
  } catch (err) {
    const error = err as Errors;
    return response.status(400).json({ error: error.message });
  }
});

todosRouter.get('/:user_id', async (request, response) => {
  try {
    const { user_id } = request.params;

    const todosRepository = getCustomRepository(TodosRepository);

    const todos = await todosRepository.find({ where: { user_id } });

    return response.json(todos);
  } catch (err) {
    const error = err as Errors;
    return response.status(400).json({ error: error.message });
  }
});

todosRouter.patch('/', async (request, response) => {
  try {
    const { id, completed, title, description } = request.body;

    const UpdateTodo = new UpdateTodoService();

    const todo = await UpdateTodo.execute({
      id,
      completed,
      title,
      description,
    });

    return response.json(todo);
  } catch (err) {
    const error = err as Errors;
    return response.status(400).json({ error: error.message });
  }
});

todosRouter.delete('/', async (request, response) => {
  try {
    const { id } = request.body;

    const DeleteTodo = new DeleteTodoService();

    const deletedTodo = await DeleteTodo.execute({ id });

    return response.json(deletedTodo);
  } catch (err) {
    const error = err as Errors;
    return response.status(400).json({ error: error.message });
  }
});

export default todosRouter;
