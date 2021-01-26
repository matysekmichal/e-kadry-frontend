import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import {MatDialog} from '@angular/material/dialog';
import {PkzpAddDialogComponent} from '../pkzp-add-dialog/pkzp-add-dialog.component';
import icWorker from '@iconify/icons-ic/twotone-person';
import {PkzpService} from '../pkzp.service';
import {Pkzp} from '../pkzp.entity';
import icBalances from '@iconify/icons-ic/twotone-import-export';
import icContribution from '@iconify/icons-ic/twotone-input';
import icLoan from '@iconify/icons-ic/twotone-upgrade';
import icRepayment from '@iconify/icons-ic/twotone-vertical-align-bottom';
import {Worker} from '../../worker/worker.entity';

@Component({
  selector: 'app-pkzp-detail',
  templateUrl: './pkzp-detail.component.html',
  styleUrls: ['./pkzp-detail.component.scss']
})
export class PkzpDetailComponent implements OnInit, OnChanges {
  icAdd = icAdd;

  @Input() worker: Worker;
  icWorker = icWorker;

  pkzpSummary: Pkzp[];
  icBalances = icBalances;
  icContribution = icContribution;
  icLoan = icLoan;
  icRepayment = icRepayment;
  pkzpContributions: Pkzp;
  private pkzpLoans: Pkzp[];

  constructor(
    public pkzpService: PkzpService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.worker) {
      this.fetchData();
    }
  }

  fetchData() {
    this.pkzpService.summary(this.worker.id).subscribe(response => {
      this.pkzpSummary = response;
    });
  }

  addRecord() {
    let dialogRef = this.dialog.open(PkzpAddDialogComponent, {
      data: {
        worker: this.worker,
        contributions: this.pkzpContributions
      },
      disableClose: true,
      autoFocus: false,
      minWidth: 400
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.refresh) {
        this.fetchData();
      }
    })
  }

  balance() {
    let result = 0;
    this.pkzpSummary.forEach(x => {
      if (typeof x.pkzpType == 'object') {
        switch (x.pkzpType.id) {
          case 20 :
            result -= x.debit;
            result += x.repayment;
            break;
        }
      }
    });

    return result ?? 0;
  }

  pkzpContributionSum() {
    this.pkzpContributions = this.pkzpSummary.find(x => {
      if (typeof x.pkzpType == 'object') {
        return x.pkzpType.id == 10;
      }
    });

    return this.pkzpContributions ? this.pkzpContributions.balance : 0;
  }

  pkzpRepaymentSum() {
    let result = 0;
    this.pkzpSummary.forEach(x => {
      if (typeof x.pkzpType == 'object' && x.pkzpType.id == 20) {
        result += x.repayment;
      }
    });

    return result;
  }

  pkzpLoanSum() {
    let result = 0;
    this.pkzpLoans = this.pkzpSummary.filter(x => {
      if (typeof x.pkzpType == 'object') {
        return x.pkzpType.id == 20;
      }
    });

    this.pkzpLoans.forEach(x => result += x.debit);

    return result ?? 0;
  }
}
