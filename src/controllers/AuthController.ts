import { Request, Response } from 'express';

import AuthenticateuserService from '../services/AuthenticateuserService';

class AuthController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateuserService();

    const { user, token } = await authenticateUser.execute({ email, password });

    // @ts-expect-error
    delete user.password;

    return response.json({ user, token });
  }
}

export default AuthController;
