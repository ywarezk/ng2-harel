import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoDetailsComponent} from "../todo-details/todo-details.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: TodoListComponent},
      {path: ':id', component: TodoDetailsComponent}
    ])
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule {

}
