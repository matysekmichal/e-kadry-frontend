import {Component, Inject} from '@angular/core';
import {ConfirmDialogData} from '../dialogs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'bs-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {
  }

  confirmed() {
    if (typeof this.data.confirmed === 'function') {
      this.data.confirmed();
      this.dialogRef.close();
    }
  }

  rejected() {
    if (typeof this.data.rejected === 'function') {
      this.data.rejected();
    }
  }

}
