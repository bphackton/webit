import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PaymentService } from '../../payment-service';

@Component({
  selector: 'webit-payment-screen',
  templateUrl: './webit-payment-screen.component.html',
  styleUrls: ['./webit-payment-screen.component.scss']
})
export class WebitPaymentScreenComponent implements AfterViewInit {
  constructor(private paymentService: PaymentService) { }
  @Input() amount: number = 500;
  @Input() label: string = 'test-label';

  elements: any;
  paymentRequest: any;
  prButton: any;

  @ViewChild('payElement') payElement;

ngAfterViewInit() {

  // instantiate a payment request object
    this.paymentRequest = this.paymentService.stripe.paymentRequest({
      country: 'US',
      currency: "usd",
      total: {
        amount: this.amount,
        label: this.label,
      }
    })

  // initialize elements
  this.elements = this.paymentService.stripe.elements();

  // register listener
  this.paymentRequest.on('source', async (event) => {
    console.log(event);
    setTimeout(() => {
      event.complete('success')
    }, 3000)
  });

  // create the button
  this.prButton = this.elements.create('paymentRequestButton', {
    paymentRequest: this.paymentRequest,
    style: {
      paymentRequestButton: {

      }
    }
  })

  // mount the button async
  this.mountButton()

}

async mountButton() {
  const result = await this.paymentRequest.canMakePayment();

  result ? this.prButton.mount(this.payElement.nativeElement) : console.log('error mounting');

}

}
