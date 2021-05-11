import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webit-main-side-view',
  templateUrl: './main-side-view.component.html',
  styleUrls: ['./main-side-view.component.scss']
})
export class MainSideViewComponent {
  @Input() status;
  @Input() userAgent;
  @Input() choosenTrans;
  transfer = {
    name: '',
    amount: '',
    desc: ''
  };

  statusChanged(e) {
    this.status = e.status;
    this.transfer = e.transfer;

  }


}
