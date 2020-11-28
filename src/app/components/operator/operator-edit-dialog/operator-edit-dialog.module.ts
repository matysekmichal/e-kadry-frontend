import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperatorEditDialogComponent} from './operator-edit-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    OperatorEditDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    IconModule,
    MatRippleModule,
  ],
  exports: [
    OperatorEditDialogComponent
  ]
})
export class OperatorEditDialogModule {
}
