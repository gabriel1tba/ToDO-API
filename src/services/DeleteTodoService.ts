import { getCustomRepository } from 'typeorm';
import Errors from '../erros/Errors';

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
      throw new Errors('ID Obrigatório.');
    }

    const todo = await todosRepository.findOne(id);

    if (!todo) {
      throw new Errors('Tarefa inexistente.', 404);
    }

    await todosRepository.delete(id);

    return { message: `A tarefa: ${todo.title} foi removida` };
  }
}

export default DeleteTodoService;
