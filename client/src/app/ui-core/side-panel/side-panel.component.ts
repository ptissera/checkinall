import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidePanelComponent implements OnInit {
  @Input() title?:string = 'Title here';
  @Input() labelButtonPrimary?:string = 'Aceptar';
  @Input() labelButtonSecondary?:string = 'Cancel';
  @Input() showButtonSecondary?:boolean = true;
  @Input() disabledPrimaryButton?:boolean = false;

  @Output() clickPrimaryButton: EventEmitter<{}> = new EventEmitter();
  @Output() clickClose: EventEmitter<{}> = new EventEmitter();

  DELAY_ANIMATION: number = 400;
  collapse: string = 'out';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleCollapse();  
    }, this.DELAY_ANIMATION);
  }

  onClickPrimaryButton() {
    this.toggleCollapse();
    setTimeout(() => {
      this.clickPrimaryButton.emit();
    }, this.DELAY_ANIMATION);
  }

  close() {
    this.closeSideOut();
  }

  closeSideOut() {
    this.toggleCollapse();
    setTimeout(() => {
      this.clickClose.emit();
     }, this.DELAY_ANIMATION);
  }

  toggleCollapse() {
    this.collapse = this.collapse === 'out' ? 'in' : 'out';
  }
    
}
