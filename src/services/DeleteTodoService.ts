import { getCustomRepository } from 'typeorm';

import Todo from '../models/Todo';
import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

class DeleteTodoService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    const todosRepository = getCustomRepository(TodosRepository);

    if (!id) {
      throw new Error('ID Obrigatório.');
    }

    const todo = await todosRepository.findOne(id);

    if (!todo) {
      throw new Error('Tarefa inexistente.');
    }

    await todosRepository.delete(id);

    return { message: `A tarefa: ${todo.title} foi removida` };
  }
}

export default DeleteTodoService;
