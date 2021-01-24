import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import {MatDialog} from '@angular/material/dialog';
import {PkzpAddDialogComponent} from '../pkzp-add-dialog/pkzp-add-dialog.component';
import icWorker from '@iconify/icons-ic/twotone-person';
import {PkzpService} from '../pkzp.service';
import {Pkzp} from '../pkzp.entity';

@Component({
  selector: 'app-pkzp-detail',
  templateUrl: './pkzp-detail.component.html',
  styleUrls: ['./pkzp-detail.component.scss']
})
export class PkzpDetailComponent implements OnInit, OnChanges {
  icAdd = icAdd;

  @Input() workerId: string;
  icWorker = icWorker;

  pkzpSummary: Pkzp;

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

}
