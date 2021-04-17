import { Router } from 'express';
import todosRouter from './todos.routes';

const routes = Router();

routes.use('/todos', todosRouter);

export default routes;
