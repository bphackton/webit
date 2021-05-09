import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'webit-main-side-view',
  templateUrl: './main-side-view.component.html',
  styleUrls: ['./main-side-view.component.scss']
})
export class MainSideViewComponent implements OnInit {
  @Input() status;
  @Input() userAgent;
  @Input() choosenTrans;
  transfer = {
    name: '',
    amount: '',
    desc: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  submit () {
    this.status = 'qr-code-transfer'
    console.log('in submit')
  }

}
