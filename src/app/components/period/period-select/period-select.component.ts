import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PeriodService} from '../period.service';
import {Period} from '../period.entity';
import * as moment from 'moment';

@Component({
  selector: 'app-period-select',
  templateUrl: './period-select.html',
})
export class PeriodSelectComponent implements OnInit {
  @Input() subMonths = 2;
  @Input() nextMonths = 3;
  @Output() selected = new EventEmitter<string>();
  periods: Period[];
  selectedValue: string;

  constructor(
    private periodService: PeriodService
  ) {
  }

  ngOnInit(): void {
    this.periodService.getToSelect(this.subMonths, this.nextMonths).subscribe(response => {
      this.periods = response;
      this.selectedValue = this.periods.find(x => moment(x.dateFrom).isSame(moment(), 'month')).id;
    });
  }

  selectPeriod(period: Period) {
    this.selected.emit(period.id);
  }
}
