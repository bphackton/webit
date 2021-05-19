import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

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

  isLoading = false;

  // LOTTIE ANIMATION
  options: AnimationOptions = {
    path: '../../assets/lottie/webit_lottie.json',
  };

  statusChanged(e) {
    this.status = e.status;
    this.transfer = e.transfer;

  }


}
