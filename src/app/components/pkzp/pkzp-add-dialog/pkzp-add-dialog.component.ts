import {Component, Inject, Injector, OnInit} from '@angular/core';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import {Operator} from '../../operator/operator.entity';
import {OperatorService} from '../../operator/operator.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ResourceDialogData, ResourcePkzpAddDialogData} from '../../../contracts/dialog.interface';
import icVisibility from '@iconify/icons-ic/twotone-visibility';

@Component({
  selector: 'app-pkzp-add-dialog',
  templateUrl: './pkzp-add-dialog.component.html',
  styleUrls: ['./pkzp-add-dialog.component.scss']
})
export class PkzpAddDialogComponent extends DelegatedFormTemplate<Operator> implements OnInit {
  private refreshAfterClose = false;
  icVisibility = icVisibility;

  @Inject(MAT_DIALOG_DATA) private data: ResourcePkzpAddDialogData<Operator>;

  constructor(
    private injector: Injector,
    private operatorService: OperatorService,
    private dialogRef: MatDialogRef<PkzpAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: ResourcePkzpAddDialogData<Operator>,
  ) {
    super(injector);
    this.data = data;
    this.service = operatorService;

    this.dialogRef.beforeClosed().subscribe(() => {
      this.closeDialog();
    });
  }

  ngOnInit(): void {
    if (this.data.resource) {
      this.redirect = this.data.redirect ?? false;
      this.resource = this.data.resource;
      this.resourceId = this.data.resource.id;
    } else {
      this.resource = new Operator();
    }
  }

  onSubmit() {
    if (this.resourceId) {
      this.updateResource(() => {
        this.refreshAfterClose = true;
        this.dialogRef.close()
      });
    } else {
      this.createResource(() => {
        this.refreshAfterClose = true;
        this.dialogRef.close()
      });
    }
  }

  private closeDialog() {
    this.dialogRef.close({
      data: {
        refresh: this.refreshAfterClose
      }
    });
  }
}
