import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PkzpPositionListComponent} from './pkzp-position-list.component';
import {IconModule} from '@visurel/iconify-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PkzpPositionListComponent
  ],
  exports: [
    PkzpPositionListComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ]
})
export class PkzpPositionListModule {
}
