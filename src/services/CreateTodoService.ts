import { ITodosRepository } from '../contracts/TodosRepository';

import Errors from '../erros/Errors';

import Todo from '../models/Todo';
import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  user_id: string;
  completed: boolean;
  title: string;
  description: string;
}

class CreateTodoService {
  private todosRepository: ITodosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }

  public async execute({
    user_id,
    completed,
    title,
    description,
  }: IRequest): Promise<Todo> {
    if (!user_id) {
      throw new Errors('ID de usuário obrigatório.');
    }

    if (!title) {
      throw new Errors('Título obrigatório.');
    }

    const todo = this.todosRepository.create({
      user_id,
      completed,
      title,
      description,
    });

    return todo;
  }
}

export default CreateTodoService;
