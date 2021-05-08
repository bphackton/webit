import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'movements-summary',
  templateUrl: './movements-summary.component.html',
  styleUrls: ['./movements-summary.component.scss']
})
export class MovementsSummaryComponent implements OnInit {
  constructor() { }
  @Output() showTrans = new EventEmitter()
  @Input() choosenTrans
  @Input() userAgent

  ngOnInit(): void {
  }

  clickedTrans() {
    this.showTrans.emit('summery')
  }
}
