import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webit-movements',
  templateUrl: './webit-movements.component.html',
  styleUrls: ['./webit-movements.component.scss']
})
export class WebitMovementsComponent implements OnInit {
  waitingMovmentsList = [
    {
      name: 'זהבה',
      purpose: '...',
      status: 1,
      date: new Date()
    }
  ];
  movmentsList = [
    {
      name: 'בני המורה',
      purpose: 'דמי הרשמה',
      status: 1,
      displayMethodCode: 1,
      date: new Date(),
      amount: 100,
      avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      name: 'יעל אחותי',
      purpose: 'מתנה לאמא',
      status: 1,
      displayMethodCode: 1,
      date: new Date(),
      amount: 600,
      avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      name: 'ועד בית',
      purpose: 'תשלום חודשי',
      status: 1,
      displayMethodCode: 2,
      date: new Date(),
      amount: 300,
      avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      name: 'הילה',
      purpose: 'ויטרינה',
      status: 1,
      displayMethodCode: 2,
      date: new Date(),
      amount: 64,
      avatar: 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  
  }

}
