import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SnakePipe } from './snake.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SnakePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
