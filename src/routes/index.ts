import { Router } from 'express';
import todosRouter from './todos.routes';

const routes = Router();

routes.get('todos', todosRouter);

export default routes;
