import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {InfoDialogComponent} from '../message/dialogs/info-dialog/info-dialog.component';
import {ErrorDialogComponent} from '../message/dialogs/error-dialog/error-dialog.component';
import {ConfirmationDialogComponent} from '../message/dialogs/confirmation-dialog/confirmation-dialog.component';
import {ProcessingDialogComponent} from '../message/dialogs/processing-dialog/processing-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  toast(text: string | string[], title = 'Zamknij', actionCallback = () => {}) {
    setTimeout(() => {
      const snackBar = this.snackBar.open(Array.isArray(text) ? text.join('. ') : text, title, {
        duration: 6000
      });

      snackBar.onAction().subscribe(() => {
        actionCallback();
      });
    });
  }

  info(text: string | string[], title = null, button = null, afterClosed = () => {}, icon = true) {
    setTimeout(() => {
      const dialogRef = this.dialog.open(InfoDialogComponent, {
        data: {text: Array.isArray(text) ? text.join('. ') : text, title, button, icon},
        minWidth: 400,
        maxWidth: 600
      });

      dialogRef.afterClosed().subscribe(() => afterClosed);
    });
  }

  error(message: string | string[], title = null, afterClosed = () => {}) {
    setTimeout(() => {
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
        data: {message: Array.isArray(message) ? message.join('<br>') : message, title},
        minWidth: 400,
        maxWidth: 600
      });

      dialogRef.afterClosed().subscribe(() => afterClosed);
    });
  }

  confirm(title: string | string[], text: string | string[] = null, confirmButton = null, rejectButton = null, confirmed = () => {
  }, rejected = () => {
  }, afterClosed = () => {
  }) {
    setTimeout(() => {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          title: Array.isArray(title) ? title.join('. ') : title,
          text: Array.isArray(text) ? text.join('. ') : text,
          confirmButton,
          rejectButton,
          confirmed,
          rejected
        },
        minWidth: 400,
        maxWidth: 600,
        autoFocus: false,
      });

      dialogRef.afterClosed().subscribe(() => afterClosed);
    });
  }

  lockLoading(message: string, afterClosed = () => {}) {
    const dialogRef = this.dialog.open(ProcessingDialogComponent, {
      data: {message},
      minWidth: 400,
      maxWidth: 600,
      disableClose: true,
      panelClass: 'no-body',
      backdropClass: 'backdrop-darken'
    });

    dialogRef.afterClosed().subscribe(() => afterClosed);

    return dialogRef;
  }
}
