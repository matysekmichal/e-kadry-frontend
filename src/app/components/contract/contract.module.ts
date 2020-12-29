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
import {ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ContractListComponent],
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
  ]
})
export class ContractModule {
}
