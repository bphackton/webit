import { Component, Input } from '@angular/core';

@Component({
  selector: 'webit-movement-details',
  templateUrl: './webit-movement-details.component.html',
  styleUrls: ['./webit-movement-details.component.scss']
})
export class WebitMovementDetailsComponent {
  @Input() movment;
}
