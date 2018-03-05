import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() public message: any;
  public serverObservable: Observable<any>;

  constructor(private _http: HttpClient, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.serverObservable = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }

  public detectCD() {
    console.log('change detection in child');
  }

  public stam() {

  }
}
