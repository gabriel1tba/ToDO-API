import Todo from '../models/Todo';

interface ITodo {
  title: string;
  description: string;
}
class TodosRepository {
  private todos: Todo[];

  constructor() {
    this.todos = [];
  }

  public all() {
    return this.todos;
  }

  public create({ title, description }: ITodo): Todo {
    const todo = new Todo({ title, description });

    this.todos.push(todo);

    return todo;
  }
}

export default TodosRepository;
