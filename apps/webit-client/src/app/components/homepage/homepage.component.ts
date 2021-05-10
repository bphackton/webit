import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserAgentService } from '../../user-agent.service';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';
import * as XLSX from 'xlsx';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'webit-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  userAgent: string;
  showDetails = false;
  choosenTrans: any;
  authenticated = false;
  date = new Date;
  qrReaderActive = false;
  fileName= `Bit-Transactions-${this.date.getDate()}/${this.date.getUTCMonth()+1}/${this.date.getFullYear()}.xlsx`;
  addSum: number;
  paySum: number;
  status = null;

  // LOTTIE ANIMATION
  options: AnimationOptions = {
    path: '../../assets/lottie/bit_new_loader_74_175.json',
  };

  private subscriptions = new Subscription();


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
    // this.qrReaderActive = false;
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
}
