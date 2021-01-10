import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractRoutingModule} from './contract-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {IconModule} from '@visurel/iconify-angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DateAdapter, MatNativeDateModule} from '@angular/material/core';
import {CustomDateAdapter} from '../../utils/custom-date-adapter';
import {PricePipeModule} from '../../pipes/price-pipe/price-pipe.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ContractAddDialogComponent} from './contract-add-dialog/contract-add-dialog.component';
import {ContractAddDialogModule} from './contract-add-dialog/contract-add-dialog.module';

@NgModule({
  entryComponents: [
    ContractAddDialogComponent,
  ],
  declarations: [
    ContractListComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    IconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSortModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PricePipeModule,
    MatFormFieldModule,
    MatSelectModule,
    ContractAddDialogModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
  ]
})
export class ContractModule {
}
