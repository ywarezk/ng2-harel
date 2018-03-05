import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  exportAs: 'child'
})
export class ChildComponent implements OnInit {

  public transferVarToParent: string = 'this is exposed from template reference';
  @Input('message') public messageFromParent: string;
  @Output() public buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * will emit an event at the parent
   */
  passDataToParent() {
    this.buttonClicked.emit('hello world from event in child');
  }

}
