import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PeriodService} from '../period.service';
import {Period} from '../period.entity';
import icNext from '@iconify/icons-ic/twotone-keyboard-arrow-right';
import icPrev from '@iconify/icons-ic/twotone-keyboard-arrow-left';

export type PeriodSwitchDirections = 'next' | 'prev';

@Component({
  selector: 'app-period-switch',
  templateUrl: './period-switch.html',
  styleUrls: ['./period-switch.scss']
})
export class PeriodSwitchComponent implements OnInit {
  icNext = icNext;
  icPrev = icPrev;
  direct: PeriodSwitchDirections;

  @Output() selected = new EventEmitter<string>();

  periods: Period[];
  selectedValue: string;
  private subMonths = 1;
  private nextMonths = 1;

  prevable = true;
  nextable = true;
  currentPeriod: Period;

  switchTimer: number;
  switchInterval = 600;

  constructor(
    private periodService: PeriodService
  ) {
  }

  ngOnInit(): void {
    this.fetchPeriods(periods => {
      this.currentPeriod = periods[1];
      this.selected.emit(this.currentPeriod.id);
    });
  }

  selectPeriod(period: Period, direct: PeriodSwitchDirections) {
    this.fetchPeriods(periods => {
      if (periods.length <= 2) {
        switch (direct) {
          case 'next':
            this.nextable = false;
            this.prevable = true;
            this.currentPeriod = periods[1];
            break;
          default:
            this.nextable = true;
            this.prevable = false;
            this.currentPeriod = periods[0];
        }
      } else {
        this.prevable = true;
        this.nextable = true;
        this.currentPeriod = periods[1];
      }

      this.selected.emit(this.currentPeriod.id);
    });
  }

  fetchPeriods(callback = (periods: Period[]) => {}) {
    this.periodService.getToSelect(this.subMonths, this.nextMonths).subscribe(response => {
      this.periods = response;
      callback(response);
    });
  }

  switchPeriod(direct: PeriodSwitchDirections) {
    clearTimeout(this.switchTimer);

    switch (direct) {
      case 'next':
        this.subMonths -= 1;
        this.nextMonths += 1;
        break;
      case 'prev':
        this.nextMonths -= 1;
        this.subMonths += 1;
        break;
    }

    if (direct) {
      // @ts-ignore
      this.switchTimer = setTimeout(() => {
        switch (direct) {
          case 'next':
            this.selectPeriod(this.periods[this.periods.length - 1], 'next');
            break;
          case 'prev':
            this.selectPeriod(this.periods[0], 'prev');
            break;
        }
      }, this.switchInterval);
    }
  }
}
