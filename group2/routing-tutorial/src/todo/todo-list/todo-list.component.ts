
import {Component, OnInit} from "@angular/core";
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import {ActivatedRoute, ParamMap} from "@angular/router";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  template: `
    <harel-search></harel-search>
    <table class="table table-striped table-sm mt-5">
      <tr>
        <th>
          #
        </th>
        <th>
          Title
        </th>
      </tr>
      <tr *ngFor="let task of tasks">
        <td>
          {{task.id}}
        </td>
        <td>
            <a [routerLink]="'/tasks/' + task.id">
                {{task.title}}
            </a>  
        </td>
      </tr>
    </table>
  `
})
export class TodoListComponent implements OnInit{
  tasks: Todo[] = [];

  constructor(private _todoService: TodoService, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this._todoService.getAllTasks().subscribe((tasks: Todo[]) => {
    //   this.tasks = tasks;
    // })

    // this._activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
    //   const search: string = params.get('search');
    //   this._todoService.getAllTasks(search).subscribe((tasks: Todo[]) => {
    //     this.tasks = tasks;
    //   })
    // });

    this._activatedRoute.queryParamMap
      .map((params: ParamMap) => params.get('search'))
      .debounceTime(1000)
      .distinctUntilChanged()
      .mergeMap((searchString: string) => this._todoService.getAllTasks(searchString))
      .subscribe((tasks: Todo[]) => {
        this.tasks = tasks;
      })
  }
}
