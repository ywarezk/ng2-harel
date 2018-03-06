

export interface ITask {
  title: string;
  description: string;
  id: number;
}

export class Task implements ITask{
  title: string;
  description: string;
  id: number;

  constructor(json: ITask) {
    this.title = json.title || '';
    this.description = json.description || '';
    this.id = json.id || 0;
  }
}

