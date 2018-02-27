/**
 * Routing configurations for the root module
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Error404Component} from '../error404/error404.component';
import {AboutComponent} from '../about/about.component';
import {HomeComponent} from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'tasks', loadChildren: '../../todo/todo.module#TodoModule'},
      {path: '**', component: Error404Component},
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
