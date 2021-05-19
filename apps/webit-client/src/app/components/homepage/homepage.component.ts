import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserAgentService } from '../../user-agent.service';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'webit-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  userAgent: string;
  showDetails = false;
  choosenTrans: any;
  authenticated = true;
  date = new Date;
  qrReaderActive: boolean;
  fileName= `Bit-Transactions-${this.date.getDate()}/${this.date.getUTCMonth()+1}/${this.date.getFullYear()}.xlsx`;
  addSum: number;
  paySum: number;
  status = null;
  transferMobile = false;

  transferMobileForm = {
    amount: null,
    phone: null,
    desc: null,
    title: null
  }

  private subscriptions = new Subscription();
  addedTrans;

  constructor( private userAgentService: UserAgentService, private aut: AuthService) { }

  ngOnInit(): void {
    this.userAgent = this.userAgentService.checkDevice();
    this.subscriptions.add(this.aut.isAuthedSubj.subscribe(authenticated => this.authenticated = authenticated));
  }

  clickedTrans(movement) {
    console.log(movement ,'in home page');
    this.showDetails = !this.showDetails;
    this.choosenTrans = movement;
    this.changeStatus('summery');
  }

  showSums(sums) {
    this.addSum = sums.addSum;
    this.paySum = sums.paySum;
  }

  testExcel() {
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'פירוט תשלומים ביט ציבי שביט');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  scanSuccess(data) {
    this.aut.authenticate(data);
    this.qrReaderActive = false;
  }

  scanError(e) {
    console.log(e);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  changeStatus(status: string) {
    this.status = status;
    console.log(status);

  }

  addTransfer() {
    console.log(this.transferMobileForm);
    let mockJson = {
      amount: this.transferMobileForm.amount,
      avatar: "img",
      date: "01.10.21",
      desc: this.transferMobileForm.desc,
      hour: "11:11",
      id: 10,
      name: this.transferMobileForm.title,
      purpose: this.transferMobileForm.desc,
      sentTo: this.transferMobileForm.phone,
      sumbitId: "2312420",
      tranType: "payment"
    }
    this.transferMobile = false;
    this.addedTrans = mockJson;

  }
}
