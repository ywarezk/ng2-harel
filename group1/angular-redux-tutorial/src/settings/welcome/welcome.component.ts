import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ISettingsState} from '../settings-store/reducers';

@Component({
  template: `
    <h1>
      Welcome to the settings section
    </h1>
    <h2>
      this is loaded lazily 
    </h2>
    <h3>
      This is grabbed from the state of the settings {{user | async}}
    </h3>
  `
})
export class WelcomeComponent {
  public user: Observable<string> = this._store.select((state: any) => {return state.settings.user.user});

  constructor(private _store: Store<any>) {
  }
}
