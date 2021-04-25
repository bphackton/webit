import { Component, OnInit } from '@angular/core';
import { WebitHomepageService } from './webit-homepage.service';

@Component({
  selector: 'webit-homepage',
  templateUrl: './webit-homepage.component.html',
  styleUrls: ['./webit-homepage.component.scss']
})
export class WebitHomepageComponent implements OnInit {
  userAgent: string;
  showDetails = false;
  choosenTrans: any;

  constructor() { }

  ngOnInit(): void {
  }


  clickedTrans(movement) {
    console.log(movement ,'in home page');
    this.showDetails = !this.showDetails;
    this.choosenTrans = movement;
  }
}
