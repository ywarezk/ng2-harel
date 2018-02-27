import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TodoService} from "../todo.service";

import 'rxjs/add/operator/mergeMap';
import {Todo} from "../todo";

@Component({
  template: `
    <h1>Task title {{todo?.title}}</h1>
    <p>Task Description {{todo?.description}}</p>
    <p>Task date {{todo?.when}}</p>
  `
})
export class TodoDetailsComponent implements OnInit{
  public todo: Todo;

  constructor(private _activatedRoute: ActivatedRoute, private _todoService: TodoService) {}

  ngOnInit() {
    // this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   const id = params.get('id');
    //   this._todoService.getSingleTask(id).subscribe(() => {
    //
    //   });
    // })

    this._activatedRoute.paramMap
      .map((params: ParamMap) => params.get('id'))
      .mergeMap((id: string) => this._todoService.getSingleTask(id))
      .subscribe((task: Todo) => {
        this.todo = task;
      });
  }
}
