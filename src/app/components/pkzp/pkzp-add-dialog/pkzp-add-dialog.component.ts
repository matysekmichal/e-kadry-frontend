import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import {PkzpPositionCreateOrUpdate} from '../pkzp-position.entity';
import {PkzpService} from '../pkzp.service';
import {EnumService} from '../../../services/enum.service';
import {EnumItem} from '../../../contracts/enum';
import {PkzpAddDialogData} from '../../../contracts/dialog.interface';
import {PkzpParameters} from '../pkzp-parameters.interface';

type RepaymentTypes = 'count' | 'amount';

@Component({
  selector: 'app-pkzp-add-dialog',
  templateUrl: './pkzp-add-dialog.component.html',
  styleUrls: ['./pkzp-add-dialog.component.scss']
})
export class PkzpAddDialogComponent implements OnInit {
  icVisibility = icVisibility;

  resource: PkzpPositionCreateOrUpdate;
  pkzpPositionTypes: EnumItem[];
  pkzpParameters: PkzpParameters;

  repaymentType: RepaymentTypes;

  constructor(
    private injector: Injector,
    public pkzpService: PkzpService,
    private enumService: EnumService,
    private dialogRef: MatDialogRef<PkzpAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: PkzpAddDialogData,
  ) {
    this.resource = new PkzpPositionCreateOrUpdate();

    if (data.workerId) {
      this.resource.workerId = data.workerId;
    }
  }

  ngOnInit(): void {
    this.enumService.pkzpPositionType.subscribe(response => {
      this.pkzpPositionTypes = response;
    });

    this.pkzpService.parameter().subscribe(response => {
      this.pkzpParameters = response;
    });

    this.dialogRef.beforeClosed().subscribe(() => {
      this.closeDialog();
    });
  }

  onSubmit() {
    console.log(this.resource);
    this.pkzpService.create(this.resource).subscribe(response => {
      console.log(response);
    })
  }

  private closeDialog() {
    this.dialogRef.close({
      data: {
        refresh: true
      }
    });
  }

  setRepaymentType(type: RepaymentTypes) {
    this.repaymentType = type;
  }

  countInstallmentsAmount() {
    return Math.round(this.resource.amount / this.resource.installmentsCount);
  }

  countInstallmentsCount() {
    return Math.round(this.resource.amount / this.resource.installmentAmount);
  }

  get label() {
    switch (this.resource.pkzpPositionType) {
      case 10 :
        return 'Wysokość wkładu pienieżnego';
      case 20 :
        return 'Wysokość pożyczki';
      case 30 :
        return 'Wysokość wpisowego';
      case 40 :
        return 'Wysokość spłaty';
      default :
        return 'Wartość kwotową';
    }
  }
}
