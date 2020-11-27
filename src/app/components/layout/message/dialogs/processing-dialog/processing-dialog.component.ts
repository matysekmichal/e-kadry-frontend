import {Component, Inject} from '@angular/core';
import {ProcessingDialogData} from '../dialogs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'bs-processing-dialog',
  templateUrl: './processing-dialog.component.html',
  styleUrls: ['./processing-dialog.component.scss'],
})
export class ProcessingDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProcessingDialogData
  ) {
  }
}
