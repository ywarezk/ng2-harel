import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskService} from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _taskService: TaskService) {}

  public ngOnInit(): void {
    this._taskService.getAllTasks().subscribe();
  }
}
