import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {HomeComponent} from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'todo', component: TodoListComponent},
      {path: 'home', component: HomeComponent},
      {path: 'settings', loadChildren: '../../settings/settings.module#SettingsModule'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
