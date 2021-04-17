import { Router } from 'express';

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

    // @ts-expect-error Impedindo que a senha do usuário seja exibida
    delete user.password;
    // @ts-expect-error Impedindo que a senha do usuário seja exibida
    delete user.confirmPassword;

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
