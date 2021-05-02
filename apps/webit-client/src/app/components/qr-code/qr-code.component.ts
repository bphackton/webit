import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit, OnDestroy {
  qrcode: string;
  reload: boolean;
  private subscriptions = new Subscription();
  
  constructor(private auth: AuthService) {
    this.subscriptions.add(auth.requestToken().subscribe(
        next => (this.qrcode = next),
        error => console.log('wc-auth: ', error),
        () => {
          console.log('completing token request subscription.');
          this.reload = true;
        }
    ));
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
