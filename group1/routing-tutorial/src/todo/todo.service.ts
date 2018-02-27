import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ITodo, Todo} from './todo';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private _http: HttpClient) {}

  getTasks(searchString: string = ''): Observable<Todo[]> {
    return this._http
      .get<ITodo[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`)
      .map((arr: ITodo[]) => arr.map((itask: ITodo) => new Todo(itask)));
  }

  getSingleTask(id: string | number): Observable<Todo> {
    return this._http.get<ITodo>(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`)
      .map((todo: ITodo) => {
        return new Todo(todo);
      });
  }
}
