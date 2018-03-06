import {ITodoState, todoReducer} from './todo/todo.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface IAppState {
  todo: ITodoState;
  // settings: ISettingsState
}

export let allReducers: ActionReducerMap<IAppState> = {
  todo: todoReducer,
  // seetings: settingsReducer
}

