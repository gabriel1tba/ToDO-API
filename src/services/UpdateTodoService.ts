import { getCustomRepository } from 'typeorm';
import Errors from '../erros/Errors';

import Todo from '../models/Todo';
import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  id: string;
  title: string;
  description: string;
}

class UpdateTodoService {
  public async execute({ id, title, description }: IRequest): Promise<Todo> {
    const todosRepository = getCustomRepository(TodosRepository);

    if (!id) {
      throw new Errors('ID Obrigatório.');
    }

    if (!title) {
      throw new Errors('Título obrigatório.');
    }

    const todo = await todosRepository.findOne(id);

    if (!todo) {
      throw new Errors('Tarefa inexistente.', 401);
    }

    await todosRepository.update(id, {
      title,
      description: description ?? todo.description,
    });

    const newTodo = await todosRepository.findOne(id);

    if (!newTodo) {
      throw new Errors('Ops... Um erro inesperado aconteceu');
    }

    return newTodo;
  }
}

export default UpdateTodoService;
