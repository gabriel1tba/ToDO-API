import Todo from '../models/Todo';

class TodosRepository {
  private todos: Todo[];

  constructor() {
    this.todos = [];
  }

  public all() {
    return this.todos;
  }

  public create(title: string, description: string) {
    const todo = new Todo(title, description);

    this.todos.push(todo);

    return todo;
  }
}

export default TodosRepository;
