import {ChangeDetectorRef, Component, NgZone, OnChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public hello = {foo: 'bar'};

  constructor(private _zone: NgZone, private _cd: ChangeDetectorRef) {
    // debugger;
  }

  public detectCD() {
    console.log('change detection in parent');
  }

  public stam() {
    this.hello.foo += 'a';
    // this.hello = {
    //   foo: 'hello world'
    // };
  }
}
