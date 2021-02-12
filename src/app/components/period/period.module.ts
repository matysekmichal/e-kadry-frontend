import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeriodSelectComponent} from './period-select/period-select.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {PeriodSwitchComponent} from './period-switch/period-switch.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';

@NgModule({
  declarations: [
    PeriodSelectComponent,
    PeriodSwitchComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule,
    IconModule,
  ],
  exports: [
    PeriodSelectComponent,
    PeriodSwitchComponent,
  ]
})
export class PeriodModule {
}
