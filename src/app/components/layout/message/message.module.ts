import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './dialogs/confirmation-dialog/confirmation-dialog.component';
import {ErrorDialogComponent} from './dialogs/error-dialog/error-dialog.component';
import {InfoDialogComponent} from './dialogs/info-dialog/info-dialog.component';
import {ProcessingDialogComponent} from './dialogs/processing-dialog/processing-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    InfoDialogComponent,
    ProcessingDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
  ]
})
export class MessageModule {
}
