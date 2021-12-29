import Todo from '../models/Todo';

import TodosRepository from '../repositories/TodosRepository';
import { ITodosRepository } from '../contracts/TodosRepository';
import { IUsersRepository } from '../contracts/UsersRepository';
import UsersRepository from '../repositories/UsersRepository';

import Errors from '../erros/Errors';
interface IRequest {
  user_id: string;
}

class GetTodosService {
  private usersRepository: IUsersRepository;
  private todosRepository: ITodosRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.todosRepository = new TodosRepository();
  }
  public async execute({ user_id }: IRequest): Promise<Todo[] | undefined> {
    const checkUsersExists = await this.usersRepository.findById(user_id);

    console.log('opa', checkUsersExists);

    if (!checkUsersExists) {
      throw new Errors('Usuário não existe', 404);
    }

    const todos = await this.todosRepository.findByUserId(user_id);

    return todos;
  }
}

export default GetTodosService;
