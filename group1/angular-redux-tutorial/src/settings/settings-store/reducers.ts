import {IUserState, userReducer} from './user/user.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface ISettingsState {
  user: IUserState;
}

export let settingsReducer: ActionReducerMap<ISettingsState> = {
  user: userReducer
}
