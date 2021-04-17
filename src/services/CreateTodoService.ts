import { getCustomRepository } from 'typeorm';

import Todo from '../models/Todo';
import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  user_id: string;
  title: string;
  description: string;
}

class CreateTodoService {
  public async execute({
    user_id,
    title,
    description,
  }: IRequest): Promise<Todo> {
    const todosRepository = getCustomRepository(TodosRepository);

    if (!user_id) {
      throw new Error('ID de usuário obrigatório.');
    }

    if (!title) {
      throw new Error('Título obrigatório.');
    }

    const todo = todosRepository.create({
      user_id,
      title,
      description,
    });

    await todosRepository.save(todo);

    return todo;
  }
}

export default CreateTodoService;
