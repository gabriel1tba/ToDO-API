import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  title: string;
  description: string;
}

class CreateTodoService {
  private todosRepository: TodosRepository;

  constructor(todosRepository: TodosRepository) {
    this.todosRepository = todosRepository;
  }

  public execute({ title, description }: IRequest) {
    const todo = this.todosRepository.create({
      title,
      description,
    });

    return todo;
  }
}

export default CreateTodoService;
