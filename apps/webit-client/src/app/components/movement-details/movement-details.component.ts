import { Component, Input } from '@angular/core';

@Component({
  selector: 'movement-details',
  templateUrl: './movement-details.component.html',
  styleUrls: ['./movement-details.component.scss']
})
export class MovementDetailsComponent {
  @Input() movment;
}
