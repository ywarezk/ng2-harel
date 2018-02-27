import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'harel-search',
  template: `
    <input type="text" class="form-control form-control-lg" name="search" (input)="searchChanged($event)" />
  `
})
export class SearchComponent {

  constructor(private _router: Router) {}

  searchChanged(event: Event) {
    const search: string = (event.target as HTMLInputElement).value;
    this._router.navigateByUrl(`/tasks?search=${search}`)
  }
}
