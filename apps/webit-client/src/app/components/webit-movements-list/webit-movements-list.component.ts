import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webit-movements-list',
  templateUrl: './webit-movements-list.component.html',
  styleUrls: ['./webit-movements-list.component.scss']
})
export class WebitMovementsListComponent {
  @Input() movmentsList;

}
