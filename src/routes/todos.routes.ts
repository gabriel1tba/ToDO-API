import { Router } from 'express';

import TodosRepository from '../repositories/TodosRepository';
import CreateTodoService from '../services/CreateTodoService';

const todosRouter = Router();
const todosRepository = new TodosRepository();

todosRouter.get('/', (request, response) => {
  const todos = todosRepository.all();

  return response.json(todos);
});

todosRouter.post('/', (request, response) => {
  try {
    const { title, description } = request.body;

    const CreateTodo = new CreateTodoService(todosRepository);

    const todo = CreateTodo.execute({ title, description });

    return response.json(todo);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default todosRouter;
