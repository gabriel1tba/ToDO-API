import { getCustomRepository } from 'typeorm';

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
      throw new Error('ID Obrigatório.');
    }

    if (!title) {
      throw new Error('Título obrigatório.');
    }

    const todo = await todosRepository.findOne(id);

    if (!todo) {
      throw new Error('Tarefa inexistente.');
    }

    await todosRepository.update(id, {
      title,
      description: description ?? todo.description,
    });

    const newTodo = await todosRepository.findOne(id);

    if (!newTodo) {
      throw new Error('Ops... Um erro inesperado aconteceu');
    }

    return newTodo;
  }
}

export default UpdateTodoService;
