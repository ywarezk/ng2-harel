/**
 * angular service that communicates with the todo task rest api
 */

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Todo} from "./todo";

import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  constructor(private _httpClient: HttpClient) {}

  getAllTasks(searchString: string = ''): Observable<Todo[]> {
    return this._httpClient
      .get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`)
      .map((arr: any[]) => {
        return arr.map((json) => { return new Todo(json)});
      });
  }

  getSingleTask(id: string): Observable<Todo> {
    return this._httpClient
      .get(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`)
      .map((json) => new Todo(json));
  }
}
