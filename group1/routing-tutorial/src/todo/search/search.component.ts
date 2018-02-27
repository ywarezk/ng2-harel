import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'harel-search',
  template: `
    <input type="text" name="search" class="form-control" (input)="searchChanged($event)" />
  `
})
export class SearchComponent {
  constructor(private _router: Router) {}

  public searchChanged(event: Event) {
    this._router.navigateByUrl(`/tasks?search=${(event.target as HTMLInputElement).value}`);
  }
}
