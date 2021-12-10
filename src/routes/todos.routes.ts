import { Router } from 'express';

import routeAuthenticated from '../middlewares/routeAuthenticated';
import TodoController from '../controllers/TodoController';

const todosRouter = Router();

const todoController = new TodoController();

todosRouter.use(routeAuthenticated);

todosRouter.get('/:user_id', todoController.index);
todosRouter.post('/', todoController.store);
todosRouter.patch('/', todoController.update);
todosRouter.delete('/', todoController.delete);

export default todosRouter;
