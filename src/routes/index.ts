import { Router } from 'express';

import todosRouter from './todos.routes';
import usersRouter from './users.routes';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/todos', todosRouter);
routes.use('/user', usersRouter);
routes.use('/auth', authRouter);

export default routes;
