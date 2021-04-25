import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'webit-waiting-movement-details',
  templateUrl: './webit-waiting-movement-details.component.html',
  styleUrls: ['./webit-waiting-movement-details.component.scss']
})
export class WebitWaitingMovementDetailsComponent {
  @Input() waitingMovment;
  @Output() showTrans = new EventEmitter()

}
