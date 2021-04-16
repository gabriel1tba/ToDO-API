import { Router } from 'express';
import v4 from '../utils/uuidv4';

const todosRouter = Router();

interface Todos {
  id: string;
  title: string;
  description: string;
}

const todos: Todos[] = [];

todosRouter.post('/', (request, response) => {
  const { title, description } = request.body;

  const todo = {
    id: v4(),
    title,
    description,
  };

  todos.push(todo);

  return response.json(todos);
});

export default todosRouter;
