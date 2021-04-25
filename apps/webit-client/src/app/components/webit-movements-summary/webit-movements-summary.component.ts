import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webit-movements-summary',
  templateUrl: './webit-movments-summary.component.html',
  styleUrls: ['./webit-movments-summary.component.scss']
})
export class WebitMovementsSummaryComponent implements OnInit {
  constructor() { }

  @Input() choosenTrans

  ngOnInit(): void {
  }

}
