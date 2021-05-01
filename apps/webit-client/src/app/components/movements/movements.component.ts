import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomepageService } from '../homepage/homepage.service';
import { UserAgentService } from '../../user-agent.service';

@Component({
  selector: 'movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  @Output() showTrans = new EventEmitter()


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


  userAgent = 'desktop'
  choosenTrans: any;
  awaitingMovmentsList: Object;
  completedMovmentsList: Object;
  showDetails: any = false;

  constructor(private webitService: HomepageService, private userAgentService: UserAgentService) { }

  private getMovements() {
    this.webitService.getAwaitingMovments().subscribe(
      res => {
        console.log(res)
        this.awaitingMovmentsList = res;
      }
    )
    this.webitService.getCompletedMovments().subscribe(
      res => {
        console.log(res)
        this.completedMovmentsList = res;
      }
    )
  }


  ngOnInit(): void {
    this.userAgent = this.userAgentService.checkDevice()
      this.getMovements()
  }

  clickedTrans(movement) {
    console.log(movement);
    this.showDetails = !this.showDetails;
    this.choosenTrans = movement;
    this.showTrans.emit(movement)
  }
}