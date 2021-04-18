import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../config/auth';
import Errors from '../erros/Errors';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateuserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Errors('Email ou senha incorretos.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Errors('Email ou senha incorretos.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    // Se chegou até aqui: usuário autenticado
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateuserService;
