import {Task} from '../../models/task';
import {TodoActions, TodoActionTypes} from './todo.actions';


export interface ITodoState {
  isLoadingFromServer: boolean;
  todoItems: Task[];
}

const initialState: ITodoState = {
  isLoadingFromServer: false,
  todoItems: []
};

export function todoReducer(
  currentState: ITodoState = initialState,
  action: TodoActions): ITodoState {

  switch (action.type) {
    case TodoActionTypes.SET_LOADING:
      return {...currentState, isLoadingFromServer: action.payload} as any;
    case TodoActionTypes.SET_TASKS:
      return {...currentState, isLoadingFromServer: false, todoItems: action.payload} as any;
    default:
      return currentState;
  }
}
