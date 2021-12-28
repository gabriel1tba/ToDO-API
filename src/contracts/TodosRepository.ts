import Todo from '../models/Todo';

export interface ICreateTodoDTO {
  user_id: string;
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
}

export interface IDeleteResponse {
  message: string;
}

export interface ITodosRepository {
  findById(id: string): Promise<Todo | undefined>;
  findByUserId(user_id: string): Promise<Todo[] | undefined>;
  create(data: Omit<ICreateTodoDTO, 'id'>): Promise<Todo>;
  save(todo: Omit<ICreateTodoDTO, 'user_id'>): Promise<Todo>;
  delete(id: string): Promise<IDeleteResponse>;
}
