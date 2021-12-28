import { Request, Response } from 'express';

import GetTodosService from '../services/GetTodosService';
import CreateTodoService from '../services/CreateTodoService';
import UpdateTodoService from '../services/UpdateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';

class TodoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const GetTodos = new GetTodosService();

    const todos = await GetTodos.execute({ user_id });

    return response.json(todos);
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
