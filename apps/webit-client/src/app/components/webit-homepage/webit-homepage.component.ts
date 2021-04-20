import { Component, OnInit } from '@angular/core';
import { WebitHomepageService } from './webit-homepage.service';

@Component({
  selector: 'webit-homepage',
  templateUrl: './webit-homepage.component.html',
  styleUrls: ['./webit-homepage.component.scss']
})
export class WebitHomepageComponent implements OnInit {
  movsments;

  constructor(private webitService: WebitHomepageService) { }

  ngOnInit(): void {
    this.getMovemetns()
  }

  private getMovemetns() {
    this.webitService.getMovments().subscribe(
      res => {
        console.log(res)
      }
    )

  }

}
