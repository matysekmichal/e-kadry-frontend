import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeriodSelectComponent} from './period-select/period-select.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PeriodSelectComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [
    PeriodSelectComponent
  ]
})
export class PeriodModule {
}
