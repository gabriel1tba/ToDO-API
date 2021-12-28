import { getRepository, Repository } from 'typeorm';

import {
  ICreateTodoDTO,
  IDeleteResponse,
  ITodosRepository,
} from '../contracts/TodosRepository';
import Errors from '../erros/Errors';

import Todo from '../models/Todo';

class TodosRepository implements ITodosRepository {
  private ormRepository: Repository<Todo>;

  constructor() {
    this.ormRepository = getRepository(Todo);
  }

  public async findById(id: string): Promise<Todo | undefined> {
    const todo = await this.ormRepository.findOne(id);

    return todo;
  }

  public async findByUserId(user_id: string): Promise<Todo[] | undefined> {
    const todos = await this.ormRepository.find({ where: { user_id } });

    return todos;
  }

  public async create(todoData: ICreateTodoDTO): Promise<Todo> {
    const todo = this.ormRepository.create(todoData);

    await this.ormRepository.save(todo);

    return todo;
  }

  public async save(todo: Todo): Promise<Todo> {
    return await this.ormRepository.save(todo);
  }

  public async delete(id: string): Promise<IDeleteResponse> {
    const todo = await this.ormRepository.findOne(id);

    if (!todo) {
      throw new Errors('Tarefa inexistente.', 404);
    }

    await this.ormRepository.delete(id);

    return { message: `A tarefa: ${todo.title} foi removida` };
  }
}

export default TodosRepository;
