import {Action} from '@ngrx/store';
import {Task} from '../../models/task';


export class TodoActionTypes {
  static SET_LOADING = '[Todo] SET_LOADING';
  static SET_TASKS = '[Todo] SET_TASKS';
}

export class SetLoading implements Action {
  readonly type = TodoActionTypes.SET_LOADING;
  constructor(public payload: boolean) {}
}

export class SetTasks implements Action {
  readonly type = TodoActionTypes.SET_TASKS;
  constructor(public payload: Task[]) {}
}

export type TodoActions = SetLoading | SetTasks;
