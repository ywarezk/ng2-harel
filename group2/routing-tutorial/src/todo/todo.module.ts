

import {NgModule} from "@angular/core";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoDetailsComponent} from "./todo-details/todo-details.component";
import {CommonModule} from "@angular/common";
import {TodoRoutingModule} from "./todo-routing/todo-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {TodoService} from "./todo.service";
import {SearchComponent} from "./search/search.component";

@NgModule({
  declarations: [TodoListComponent, TodoDetailsComponent, SearchComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {

}
