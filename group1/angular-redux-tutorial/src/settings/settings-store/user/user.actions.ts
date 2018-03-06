import {Action} from '@ngrx/store';


export class UserActionTypes {
  static SET_USER = '[User] SET_USER';
}

export class SetUser implements Action {
  readonly type = UserActionTypes.SET_USER;
  constructor(public payload: string) {}
}

