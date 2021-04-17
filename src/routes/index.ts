import { Router } from 'express';

import todosRouter from './todos.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/todos', todosRouter);
routes.use('/users', usersRouter);

export default routes;
