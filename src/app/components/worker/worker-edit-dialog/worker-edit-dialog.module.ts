import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkerEditDialogComponent} from './worker-edit-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CustomDateAdapter} from '../../../utils/custom-date-adapter';
import {DateAdapter, MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    WorkerEditDialogComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [
    WorkerEditDialogComponent
  ],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
  ]
})
export class WorkerEditDialogModule {
}
