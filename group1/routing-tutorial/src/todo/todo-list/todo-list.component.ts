

import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
import {ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';

@Component({
  template: `
    <div class="mt-5">
      <harel-search></harel-search>
        <ul class="mt-5">
          <li *ngFor="let task of tasks">
            <a [routerLink]="'/tasks/' + task.id">
              {{task.title}}
            </a>
          </li>
        </ul>  
    </div>
  `
})
export class TodoListComponent implements OnInit {
  tasks: Todo[] = [];

  constructor(private _todoService: TodoService, private _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    // this._activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
    //   const search: string = params.get('search');
    //   this._todoService.getTasks(search).subscribe((tasks: Todo[]) => {
    //     this.tasks = tasks;
    //   });
    // });

    this._activatedRoute.queryParamMap
      .debounceTime(1000)
      .map((params: ParamMap) => {
        return params.get('search') ? params.get('search') : '';
      })
      .distinctUntilChanged()
      .mergeMap((searchString: string) => this._todoService.getTasks(searchString))
      .subscribe((tasks: Todo[]) => {
        this.tasks = tasks;
      });
  }

}
