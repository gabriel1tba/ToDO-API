import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import Errors from '../erros/Errors';

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, confirmPassword } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        email,
        password,
        confirmPassword,
      });

      delete user.password;
      // @ts-expect-error
      delete user.confirmPassword;

      return response.json(user);
    } catch (err) {
      const error = err as Errors;
      return response.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
