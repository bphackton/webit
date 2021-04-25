import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'webit-movements-summary',
  templateUrl: './webit-movements-summary.component.html',
  styleUrls: ['./webit-movements-summary.component.scss']
})
export class WebitMovementsSummaryComponent implements OnInit {
  constructor() { }
  @Output() showTrans = new EventEmitter()
  @Input() choosenTrans
  @Input() userAgent

  ngOnInit(): void {
  }

  clickedTrans() {
    this.showTrans.emit()
  }
}
