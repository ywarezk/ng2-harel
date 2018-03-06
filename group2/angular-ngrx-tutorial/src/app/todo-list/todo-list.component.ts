import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../app-store/reducers';
import {Observable} from 'rxjs/Observable';
import {Task} from '../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  public tasks: Observable<Task[]> = this._store.select((state: IAppState) => state.todo.todoItems);

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
  }

}
