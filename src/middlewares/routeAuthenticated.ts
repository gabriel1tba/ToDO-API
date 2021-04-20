import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

import Errors from '../erros/Errors';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function routeAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação do token JWT

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Errors('Sem Token JWT', 401);
  }

  const { secret } = authConfig.jwt;

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, secret as string);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw (new Errors('Invalid JWT Token'), 401);
  }
}
