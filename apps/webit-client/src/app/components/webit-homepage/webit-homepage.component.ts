import { Component, OnInit } from '@angular/core';
import { WebitHomepageService } from './webit-homepage.service';
import { UserAgentService } from '../../user-agent.service';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'webit-homepage',
  templateUrl: './webit-homepage.component.html',
  styleUrls: ['./webit-homepage.component.scss']
})
export class WebitHomepageComponent implements OnInit {
  userAgent: string;
  showDetails = false;
  choosenTrans: any;
  authenticated = false;
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
}
