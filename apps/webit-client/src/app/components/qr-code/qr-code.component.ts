import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'webit-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit, OnDestroy {
  qrcode: string;
  reload: boolean;
  private subscriptions = new Subscription();

  constructor(private auth: AuthService) {
    this.subscriptions.add(auth.tokenSubj.subscribe(res => {
      this.qrcode = res;
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
