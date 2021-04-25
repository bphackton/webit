import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webit-movements-summary',
  templateUrl: './webit-movements-summary.component.html',
  styleUrls: ['./webit-movements-summary.component.scss']
})
export class WebitMovementsSummaryComponent implements OnInit {
  constructor() { }

  @Input() choosenTrans

  ngOnInit(): void {
  }

}
