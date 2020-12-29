import {Component, Input, OnInit} from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import {MatDialog} from '@angular/material/dialog';
import {PkzpAddDialogComponent} from '../pkzp-add-dialog/pkzp-add-dialog.component';
import icWorker from '@iconify/icons-ic/twotone-person';

@Component({
  selector: 'app-pkzp-detail',
  templateUrl: './pkzp-detail.component.html',
  styleUrls: ['./pkzp-detail.component.scss']
})
export class PkzpDetailComponent implements OnInit {
  icAdd = icAdd;

  @Input() workerId: string;
  icWorker = icWorker;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addRecord()
  {
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
