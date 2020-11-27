import {Component, Inject} from '@angular/core';
import {ErrorDialogData} from '../dialogs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'bs-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {

constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorDialogData) {
  }

}
