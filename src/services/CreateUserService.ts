import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    confirmPassword,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUsersExists) {
      throw new Error('Email já cadastrado.');
    }

    if (password !== confirmPassword) {
      throw new Error('As senhas não são iguais.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
