import { getCustomRepository } from 'typeorm';

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
  public async execute({
    user_id,
    completed,
    title,
    description,
  }: IRequest): Promise<Todo> {
    const todosRepository = getCustomRepository(TodosRepository);

    if (!user_id) {
      throw new Errors('ID de usuário obrigatório.');
    }

    if (!title) {
      throw new Errors('Título obrigatório.');
    }

    const todo = todosRepository.create({
      user_id,
      completed,
      title,
      description,
    });

    await todosRepository.save(todo);

    return todo;
  }
}

export default CreateTodoService;
