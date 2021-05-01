import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { UserAgentService } from '../../user-agent.service';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  userAgent: string;
  showDetails = false;
  choosenTrans: any;
  authenticated = false;
  date = new Date;
  fileName= `Bit-Transactions-${this.date.getDate()}/${this.date.getUTCMonth()+1}/${this.date.getFullYear()}.xlsx`;

  private subscriptions = new Subscription();

  constructor( private userAgentService: UserAgentService, private aut: AuthService) { }

  ngOnInit(): void {
    this.userAgent = this.userAgentService.checkDevice();
    this.subscriptions.add(this.aut.isAuthedSubj.subscribe(res => this.authenticated = res));
  }


  clickedTrans(movement) {
    console.log(movement ,'in home page');
    this.showDetails = !this.showDetails;
    this.choosenTrans = movement;
  }

  testExcel() {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'פירוט תשלומים ביט ציבי שביט');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}