import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperatorAddDialogComponent} from './operator-add-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';

@NgModule({
  declarations: [
    OperatorAddDialogComponent
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
  ],
  exports: [
    OperatorAddDialogComponent
  ]
})
export class OperatorAddDialogModule {
}
