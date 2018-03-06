import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {settingsReducer} from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('settings', settingsReducer)
  ]
})
export class SettingsStoreModule {}
