
// in typescript this is how to define a dictionary of key value

// const sampleDict: {[key: string]: number} // {'hello': 10}
// const sampleDict: {[key: number]: string} // {0: 'hello'}
// const sampleArray: number[] = [1,2,3];

export class Todo {
  title = '';
  description = '';
  when: Date = new Date();
  id = 0;

  constructor(json: {[key: string]: any}) {
    this.title = json.title || '';
    this.description = json.description || '';
    this.when = json.when ? new Date(json.when) : new Date()
    this.id = json.id || 0;
  }
}
