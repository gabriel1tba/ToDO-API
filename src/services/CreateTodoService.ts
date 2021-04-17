import { getCustomRepository } from 'typeorm';

import Todo from '../models/Todo';
import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  title: string;
  description: string;
}

class CreateTodoService {
  public async execute({ title, description }: IRequest): Promise<Todo> {
    const todosRepository = getCustomRepository(TodosRepository);

    const todo = todosRepository.create({
      title,
      description,
    });

    await todosRepository.save(todo);

    return todo;
  }
}

export default CreateTodoService;
