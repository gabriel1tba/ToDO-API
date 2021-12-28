import {
  IDeleteResponse,
  ITodosRepository,
} from '../contracts/TodosRepository';
import Errors from '../erros/Errors';

import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  id: string;
}

class DeleteTodoService {
  private todosRepository: ITodosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }
  public async execute({ id }: IRequest): Promise<IDeleteResponse> {
    if (!id) {
      throw new Errors('ID Obrigatório.');
    }

    return this.todosRepository.delete(id);
  }
}

export default DeleteTodoService;
