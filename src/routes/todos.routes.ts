import { Router } from 'express';
import v4 from '../utils/uuidv4';

const todosRouter = Router();

interface ITodo {
  id: string;
  title: string;
  description: string;
}

const todos: ITodo[] = [];

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
