import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ChildComponent} from './child/child.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  public taskObservable: Observable<Object>;

  public thisWillBeFilledAfter2Sec: null | {[key: string]: any} = null;

  @ViewChild(ChildComponent) public childComponent1: ChildComponent;
  @ViewChildren(ChildComponent) public childComponent2: ChildComponent[];
  @ViewChild('childInstance') public childComponent: ChildComponent;
  @ViewChild('stamParagraph') public paragrah: ElementRef;

  public stamObj = {
    'foo': 'bar',
    'hello': () => {},
    'meaningOfLife': 42
  }

  constructor(private _httpClient: HttpClient) {}


  public title: string = 'app';
  public twoWayExample1: string = 'hello two way binding';
  public twoWayExample2: string = 'hello two way binding 2nd';

  public sendToChild: string = 'this is passed from parent';
  // public sendToChild = {'message': 'hello world'};

  public printHello() : string {
    return 'hello world';
  }

  public stamMethod() {
    return '<span>WAT?</span>';
  }

  public printOver() {
    console.log('user hovered over div');
  }

  public random(): number {
    return Math.random();
  }

  public ngOnInit() {
    this.taskObservable = this._httpClient.get('https://nztodo.herokuapp.com/api/task/?format=json');

    setTimeout(() => {
      this.thisWillBeFilledAfter2Sec = {
        hello: 'world'
      }
    }, 2000);
  }
}
