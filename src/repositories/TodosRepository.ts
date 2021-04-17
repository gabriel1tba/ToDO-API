import { EntityRepository, Repository } from 'typeorm';
import Todo from '../models/Todo';

@EntityRepository(Todo)
class TodosRepository extends Repository<Todo> {}

export default TodosRepository;
