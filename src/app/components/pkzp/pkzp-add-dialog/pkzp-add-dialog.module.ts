import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PkzpAddDialogComponent} from './pkzp-add-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    PkzpAddDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    PkzpAddDialogComponent
  ]
})
export class PkzpAddDialogModule {
}
