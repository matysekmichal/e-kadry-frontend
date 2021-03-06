import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Operator} from '../operator.entity';
import {ResourceDialogData} from '../../../contracts/dialog.interface';
import {OperatorService} from '../operator.service';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import icVisibility from '@iconify/icons-ic/twotone-visibility';

@Component({
  selector: 'app-operator-add-dialog',
  templateUrl: './operator-add-dialog.component.html',
  styleUrls: ['./operator-add-dialog.component.scss']
})
export class OperatorAddDialogComponent extends DelegatedFormTemplate<Operator> implements OnInit {
  public showPassword = false;
  icVisibility = icVisibility;

  constructor(
    private injector: Injector,
    private operatorService: OperatorService,
    private dialogRef: MatDialogRef<OperatorAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData<Operator>,
  ) {
    super(injector);
    this.service = operatorService;
  }

  ngOnInit(): void {
    if (this.data.resource) {
      this.resource = this.data.resource;
      this.resourceId = this.data.resource.id;
    } else {
      this.resource = new Operator();
      this.resource.password = this.generatePassword();
      this.showPassword = true;
    }
  }

  onSubmit() {
    if (this.resourceId) {
      this.updateResource(() => {
        this.redirect = false;
        this.closeDialog();
      });
    } else {
      this.createResource(() => {
        this.redirect = false;
        this.closeDialog();
      });
    }
  }

  generatePassword() {
    let result = '';
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

    for ( let i = 0; i < Math.floor(Math.random() * (18 - 12)) + 12; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    return result;
  }

  private closeDialog() {
    this.dialogRef.close({
      refresh: true
    });
  }
}
