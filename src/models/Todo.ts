import v4 from '../utils/uuidv4';

interface ITodos {
  id: string;
  title: string;
  description: string;
}

class Todo implements ITodos {
  id: string;
  title: string;
  description: string;

  constructor({ title, description }: Omit<ITodos, 'id'>) {
    this.id = v4();
    this.title = title;
    this.description = description;
  }
}

export default Todo;
