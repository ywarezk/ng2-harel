

import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {allReducers} from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(allReducers)
  ]
})
export class AppStoreModule {}
