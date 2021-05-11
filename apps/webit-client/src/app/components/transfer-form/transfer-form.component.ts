import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'webit-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent {
  @Input() status;
  @Output() statusChanged = new EventEmitter<string>()
  transfer = {
    name: '',
    amount: '',
    desc: ''
  };



  submit () {
    this.status = 'qr-code-transfer'
    this.statusChanged.emit(this.status)
  }

}
