import { hash } from 'bcryptjs';

import User from '../models/User';
import Errors from '../erros/Errors';

import { IUsersRepository } from '../contracts/IUsersRepository';

import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute({
    name,
    email,
    password,
    confirmPassword,
  }: IRequest): Promise<User> {
    const checkUsersExists = await this.usersRepository.findByEmail(email);
    if (checkUsersExists) {
      throw new Errors('Email já cadastrado.');
    }

    if (password !== confirmPassword) {
      throw new Errors('As senhas não são iguais.');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
