import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PkzpMainComponent} from './pkzp-main/pkzp-main.component';
import {PkzpRoutingModule} from './pkzp-routing.module';
import {WorkerListComponent} from './worker-list/worker-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {IconModule} from '@visurel/iconify-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {PkzpDetailComponent} from './pkzp-detail/pkzp-detail.component';
import {PkzpAddDialogModule} from './pkzp-add-dialog/pkzp-add-dialog.module';
import {PkzpAddDialogComponent} from './pkzp-add-dialog/pkzp-add-dialog.component';

@NgModule({
  entryComponents: [
    PkzpAddDialogComponent
  ],
  declarations: [
    PkzpMainComponent,
    PkzpDetailComponent,
    WorkerListComponent,
  ],
  imports: [
    CommonModule,
    PkzpRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    IconModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonModule,
    PkzpAddDialogModule
  ]
})
export class PkzpModule {
}
