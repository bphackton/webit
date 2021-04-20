import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webit-waiting-movement-details',
  templateUrl: './webit-waiting-movement-details.component.html',
  styleUrls: ['./webit-waiting-movement-details.component.scss']
})
export class WebitWaitingMovementDetailsComponent {
  @Input() waitingMovment;

}
