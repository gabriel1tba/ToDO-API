import { getCustomRepository } from 'typeorm';
import { ITodosRepository } from '../contracts/TodosRepository';
import Errors from '../erros/Errors';

import Todo from '../models/Todo';

import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  id: string;
  completed: boolean;
  title: string;
  description: string;
}

class UpdateTodoService {
  private todosRepository: ITodosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }

  public async execute({
    id,
    completed,
    title,
    description,
  }: IRequest): Promise<Todo> {
    if (!id) {
      throw new Errors('ID Obrigatório.');
    }

    if (!title) {
      throw new Errors('Título obrigatório.');
    }

    const todo = await this.todosRepository.findById(id);

    if (!todo) {
      throw new Errors('Tarefa inexistente.', 401);
    }

    const newTodo = await this.todosRepository.save({
      id,
      completed: completed ?? todo.completed,
      title: title ?? todo.title,
      description: description ?? todo.description,
    });

    if (!newTodo) {
      throw new Errors('Ops... Um erro inesperado aconteceu');
    }

    return newTodo;
  }
}

export default UpdateTodoService;
