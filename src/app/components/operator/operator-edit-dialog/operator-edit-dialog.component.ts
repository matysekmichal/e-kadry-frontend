import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Operator} from '../operator.entity';
import {ResourceDialogData} from '../../../contracts/dialog.interface';
import {OperatorService} from '../operator.service';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icPassword from '@iconify/icons-ic/twotone-lock';

@Component({
  selector: 'app-operator-edit-dialog',
  templateUrl: './operator-edit-dialog.component.html',
  styleUrls: ['./operator-edit-dialog.component.scss']
})
export class OperatorEditDialogComponent extends DelegatedFormTemplate<Operator> implements OnInit {
  private refreshAfterClose = false;
  showPassword = false;
  passwordChange = false;
  icVisibility = icVisibility;
  icPassword = icPassword;

  constructor(
    private injector: Injector,
    private operatorService: OperatorService,
    private dialogRef: MatDialogRef<OperatorEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData<Operator>,
  ) {
    super(injector);
    this.service = operatorService;
  }

  ngOnInit(): void {
    if (this.data.resource) {
      this.redirect = this.data.redirect ?? false;
      this.resource = Object.assign({}, this.data.resource);
      this.resourceId = this.data.resource.id;
    }
  }

  onSubmit() {
    this.updateResource(() => {
      this.refreshAfterClose = true;
      this.closeDialog();
    });
  }

  generatePassword() {
    let result = '';
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

    for ( let i = 0; i < Math.floor(Math.random() * (18 - 12)) + 12; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    return result;
  }

  changePassword() {
    this.passwordChange = !this.passwordChange;

    if (this.passwordChange) {
      this.resource.password = this.generatePassword();
      this.showPassword = true;
    } else {
      this.resource.password = null;
      this.showPassword = false;
    }
  }

  private closeDialog() {
    this.dialogRef.close({
      refresh: this.refreshAfterClose,
      resource: this.resource,
    });
  }
}
