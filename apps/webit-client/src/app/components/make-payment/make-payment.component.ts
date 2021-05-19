import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'webit-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  form: FormGroup;
  transfer = {
    name: '',
    amount: '',
    phone: '',
    desc: ''
  };

  makePaymentRequest(value) {
    if (window.PaymentRequest) {
      console.log('support Payment Request');
      const supportedPaymentMethods = [
          {
            supportedMethods: ['basic-card']
          }
        ];

    // Payment Details
    const paymentDetails = {
      total: {
        label: 'Total Cost',
        amount: {
          currency: 'NIS',
          value: value
        }
      }
    }

    // custom options
    const options = {}

    // create Request
    const paymentRequest = new PaymentRequest( supportedPaymentMethods, paymentDetails, options)

      paymentRequest.show();

  }
  else
    {
      console.log('dosent support payment request');
    }
  }

  ngOnInit(){
   console.log('init')
  }

  submitPay() {
    this.makePaymentRequest(this.transfer.amount);
  }

}
