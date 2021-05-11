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
    name: 'אורן צזנה',
    amount: 500,
    desc: 'המבורגר'
  };

  statusChanged(status) {
    this.status = status;

  }


}
