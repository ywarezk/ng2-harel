/**
 * details about todo task
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  template: `
    <h1>Task title {{todo.title}}</h1>
    <p>Task Description {{todo.description}}</p>
    <p>Task id {{todo.id}}</p>
    <p>Task date {{todo.when}}</p>
  `
})
export class TodoDetailsComponent implements OnInit{
  todo: Todo;

  constructor(private _activatedRoute: ActivatedRoute, private _todoService: TodoService) {

  }

  ngOnInit() {
    this._activatedRoute.paramMap
      .mergeMap((params: ParamMap) => this._todoService.getSingleTask(params.get('id')))
      .subscribe((todo: Todo) => {
        this.todo = todo;
      });
  }
}
