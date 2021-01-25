import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import {MatDialog} from '@angular/material/dialog';
import {PkzpAddDialogComponent} from '../pkzp-add-dialog/pkzp-add-dialog.component';
import icWorker from '@iconify/icons-ic/twotone-person';
import {PkzpService} from '../pkzp.service';
import {Pkzp} from '../pkzp.entity';
import icBalances from '@iconify/icons-ic/twotone-import-export';
import icContribution from '@iconify/icons-ic/twotone-vertical-align-bottom';
import icLoan from '@iconify/icons-ic/twotone-upgrade';

@Component({
  selector: 'app-pkzp-detail',
  templateUrl: './pkzp-detail.component.html',
  styleUrls: ['./pkzp-detail.component.scss']
})
export class PkzpDetailComponent implements OnInit, OnChanges {
  icAdd = icAdd;

  @Input() workerId: string;
  icWorker = icWorker;

  pkzpSummary: Pkzp[];
  icBalances = icBalances;
  icContribution = icContribution;
  icLoan = icLoan;

  constructor(
    public pkzpService: PkzpService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.workerId) {
      this.pkzpService.summary(this.workerId).subscribe(response => {
        this.pkzpSummary = response;
      });
    }
  }

  addRecord() {
    this.dialog.open(PkzpAddDialogComponent, {
      data: {
        resource: null,
        workerId: this.workerId,
      },
      disableClose: true,
      autoFocus: false,
      minWidth: 400
    });
  }

  balance() {
    let result = 0;
    this.pkzpSummary.forEach(x => {
      if (typeof x.pkzpType == 'object') {
        switch (x.pkzpType.id) {
          case 10 :
            result += x.balance;
            break;
          case 20 :
            result -= x.debit;
            break;
        }
      }
    });

    return result ?? 0;
  }

  pkzpContributionSum() {
    let pkzpContributions = this.pkzpSummary.find(x => {
      if (typeof x.pkzpType == 'object') {
        return x.pkzpType.id == 10;
      }
    });

    return pkzpContributions ? pkzpContributions.balance : 0;
  }

  pkzpLoanSum() {
    let result = 0;
    let pkzpLoans = this.pkzpSummary.filter(x => {
      if (typeof x.pkzpType == 'object') {
        return x.pkzpType.id == 20;
      }
    });

    pkzpLoans.forEach(x => result += x.debit);

    return result ?? 0;
  }
}
