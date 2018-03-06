import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TaskService} from './services/task.service';
import {HttpClientModule} from '@angular/common/http';
import {AppStoreModule} from './app-store/app-store.module';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppStoreModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
