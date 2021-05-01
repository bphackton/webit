import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl} from '@angular/forms';
import {filter, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.scss']
})
export class MovementsListComponent implements OnInit, OnChanges {
  @Input() waitingMovment;
  @Output() showTrans = new EventEmitter();
  failterdwaitingMovment = [];
  searchCtrl = new FormControl('');


  constructor() {
    this.failterdwaitingMovment = this.waitingMovment;
    console.log(this.failterdwaitingMovment)
  }

  ngOnChanges({waitingMovment}: SimpleChanges) {
    this.failterdwaitingMovment = waitingMovment.currentValue;
  }

  ngOnInit() {
    this.searchCtrl.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
    )
    .subscribe((term) => {
      const filterd = this.waitingMovment.filter((movment) => movment.name.toLowerCase().includes(term.toLowerCase()));
      this.failterdwaitingMovment = filterd;
    })
  }
}
