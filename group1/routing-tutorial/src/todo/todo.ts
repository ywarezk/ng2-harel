/**
 * define the todo task model
 */

export interface ITodo {
  id: number;
  title: string;
  description: string;
  when: Date;
}

export class Todo implements ITodo{
  id = 0;
  title = '';
  description = '';
  when = new Date();

  constructor(json: {[key: string]: any}) {
    this.title = json.title || '';
    this.description = json.description || '';
    this.when = json.when ? new Date(json.when) : new Date();
    this.id = json.id || 0;
  }

}
