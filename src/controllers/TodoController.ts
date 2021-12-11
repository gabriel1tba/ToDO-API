import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import TodosRepository from '../repositories/TodosRepository';

import CreateTodoService from '../services/CreateTodoService';
import UpdateTodoService from '../services/UpdateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';

import Errors from '../erros/Errors';

class TodoController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;

      const todosRepository = getCustomRepository(TodosRepository);

      const todos = await todosRepository.find({ where: { user_id } });

      return response.json(todos);
    } catch (err) {
      const error = err as Errors;
      return response.status(400).json({ error: error.message });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, completed, title, description } = request.body;

    const CreateTodo = new CreateTodoService();

    const todo = await CreateTodo.execute({
      user_id,
      completed,
      title,
      description,
    });

    return response.json(todo);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, completed, title, description } = request.body;

    const UpdateTodo = new UpdateTodoService();

    const todo = await UpdateTodo.execute({
      id,
      completed,
      title,
      description,
    });

    return response.json(todo);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const DeleteTodo = new DeleteTodoService();

    const deletedTodo = await DeleteTodo.execute({ id });

    return response.json(deletedTodo);
  }
}

export default TodoController;
