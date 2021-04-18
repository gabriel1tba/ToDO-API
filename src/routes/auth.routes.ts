import { Router } from 'express';
import AuthenticateuserService from '../services/AuthenticateuserService';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateuserService();

  const { user, token } = await authenticateUser.execute({ email, password });

  // @ts-expect-error
  delete user.password;

  return response.json({ user, token });
});

export default authRouter;
