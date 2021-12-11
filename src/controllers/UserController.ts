import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }
}

export default UserController;
