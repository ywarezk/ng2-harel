import {SetUser, UserActionTypes} from './user.actions';


export interface IUserState {
  user: string;
}

const initialState: IUserState = {
  user: 'Yariv'
}

export function userReducer(state: IUserState = initialState, action: SetUser): IUserState {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
}
