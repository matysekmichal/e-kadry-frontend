import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractAddDialogComponent} from './contract-add-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CustomDateAdapter} from '../../../utils/custom-date-adapter';
import {DateAdapter, MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SearchModule} from '../../search/search.module';

@NgModule({
  declarations: [
    ContractAddDialogComponent
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
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        SearchModule,
    ],
  exports: [
    ContractAddDialogComponent
  ],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
  ]
})
export class ContractAddDialogModule {
}
