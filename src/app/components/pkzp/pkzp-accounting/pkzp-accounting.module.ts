import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PkzpAccountingComponent} from './pkzp-accounting.component';
import {PkzpAccountingListComponent} from './pkzp-accounting-list/pkzp-accounting-list.component';
import {PeriodModule} from '../../period/period.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    PkzpAccountingComponent,
    PkzpAccountingListComponent,
  ],
  exports: [
    PkzpAccountingComponent
  ],
  imports: [
    CommonModule,
    PeriodModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
  ]
})
export class PkzpAccountingModule {
}
