import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {HomeComponent} from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'todo', component: TodoListComponent},
      {path: 'home', component: HomeComponent},
    ])
  ]
})
export class AppRoutingModule {

}
