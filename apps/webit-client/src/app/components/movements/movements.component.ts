import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';
import { UserAgentService } from '../../user-agent.service';

@Component({
  selector: 'movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit, OnChanges {

  @Output() showTrans = new EventEmitter();
  @Output() showSums = new EventEmitter();
  @Input() addedTrans;

  // waitingMovmentsList = [
  //   {
  //     name: 'זהבה',
  //     purpose: '...',
  //     status: 1,
  //     date: new Date()
  //   }
  // ];
  // movmentsList = [
  //   {
  //     name: 'בני המורה',
  //     purpose: 'דמי הרשמה',
  //     status: 1,
  //     displayMethodCode: 1,
  //     date: new Date(),
  //     amount: 100,
  //     avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
  //   },
  //   {
  //     name: 'יעל אחותי',
  //     purpose: 'מתנה לאמא',
  //     status: 1,
  //     displayMethodCode: 1,
  //     date: new Date(),
  //     amount: 600,
  //     avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
  //   },
  //   {
  //     name: 'ועד בית',
  //     purpose: 'תשלום חודשי',
  //     status: 1,
  //     displayMethodCode: 2,
  //     date: new Date(),
  //     amount: 300,
  //     avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
  //   },
  //   {
  //     name: 'הילה',
  //     purpose: 'ויטרינה',
  //     status: 1,
  //     displayMethodCode: 2,
  //     date: new Date(),
  //     amount: 64,
  //     avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
  //   }
  // ]


  userAgent = 'desktop';
  choosenTrans: any;
  awaitingMovmentsList;
  completedMovmentsList: Object;
  showDetails: any = false;
  tranSumm: { paySum: number; addSum: number };

  constructor(private webitService: HomepageService, private userAgentService: UserAgentService) {
  }

  private getMovements() {
    this.webitService.getAwaitingMovments().subscribe(
      res => {
        console.log(res);
        this.awaitingMovmentsList = res;
        this.calcSums(res);
      }
    );
    // this.webitService.getCompletedMovments().subscribe(
    //   res => {
    //     console.log(res)
    //     this.completedMovmentsList = res;
    //   }
    // )
  }


  ngOnInit(): void {
    this.userAgent = this.userAgentService.checkDevice();
    this.getMovements();
  }

  ngOnChanges({ addedTrans }: SimpleChanges) {
    if (addedTrans.currentValue) {
      this.awaitingMovmentsList.unshift(addedTrans.currentValue);
      this.calcSums(this.awaitingMovmentsList);
    }
  }

  calcSums(movements) {
    let additionArr = movements.filter((movement) => movement.tranType === 'additon');
    let paymentArr = movements.filter((movement) => movement.tranType === 'payment');
    let additonSum = 0;
    let paymentSum = 0;

    additionArr.forEach((ev) => {
      additonSum += ev.amount;
    });

    paymentArr.forEach((ev) => {
      paymentSum += ev.amount;
    });
    this.tranSumm = {
      addSum: additonSum,
      paySum: paymentSum
    };
    this.showSums.emit(this.tranSumm);
  }

  clickedTrans(movement) {
    console.log(movement);
    this.showDetails = !this.showDetails;
    this.choosenTrans = movement;
    this.showTrans.emit(movement);
  }
}
