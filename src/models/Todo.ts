import v4 from '../utils/uuidv4';

interface Todos {
  id: string;
  title: string;
  description: string;
}

class Todo implements Todos {
  id: string;
  title: string;
  description: string;

  constructor(title: string, desscription: string) {
    this.id = v4();
    this.title = title;
    this.description = desscription;
  }
}

export default Todo;
