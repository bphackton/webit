import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'webit-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent {
  @Input() status;
  @Output() statusChanged = new EventEmitter<{ status: string, transfer: any}>();
  form: FormGroup;
  transfer = {
    name: '',
    amount: '',
    desc: ''
  };


  submit() {
    this.status = 'qr-code-transfer';
    this.statusChanged.emit({status: this.status, transfer: this.transfer});
  }

}
