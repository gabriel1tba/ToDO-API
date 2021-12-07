import { Router } from 'express';
import Errors from '../erros/Errors';

const usersRouter = Router();

import CreateUserService from '../services/CreateUserService';

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password, confirmPassword } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      confirmPassword,
    });

    // @ts-expect-error
    delete user.password;
    // @ts-expect-error
    delete user.confirmPassword;

    return response.json(user);
  } catch (err) {
    const error = err as Errors;
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
