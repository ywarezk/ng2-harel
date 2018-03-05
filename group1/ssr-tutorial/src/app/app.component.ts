import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(@Inject(PLATFORM_ID) private _platformId: any) {}

  public ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      $('body').css('background-color', 'red');
    }
  }

}
