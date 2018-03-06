import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ITask, Task} from '../models/task';

import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {IAppState} from '../app-store/reducers';
import {SetLoading, SetTasks} from '../app-store/todo/todo.actions';

@Injectable()
export class TaskService {
  constructor(private _http: HttpClient, private _store: Store<IAppState>) {

  }

  public getAllTasks(): Observable<Task[]> {
    this._store.dispatch(new SetLoading(true));
    return this._http.get<ITask[]>('https://nztodo.herokuapp.com/api/task/?format=json')
      .map((taskJsons: ITask[]) => {
        const tasks: Task[] = taskJsons.map((json: ITask) => {
          return new Task(json);
        });
        this._store.dispatch(new SetTasks(tasks));
        return tasks;
      });
  }
}
