import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkerListComponent} from './worker-list/worker-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@visurel/iconify-angular';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {WorkerRoutingModule} from './worker-routing.module';
import {WorkerManageComponent} from './worker-manage/worker-manage.component';
import {HiddenTextModule} from '../hidden-text/hidden-text.module';
import {WorkerAddDialogModule} from './worker-add-dialog/worker-add-dialog.module';
import {WorkerAddDialogComponent} from './worker-add-dialog/worker-add-dialog.component';
import {WorkerEditDialogComponent} from './worker-edit-dialog/worker-edit-dialog.component';
import {WorkerEditDialogModule} from './worker-edit-dialog/worker-edit-dialog.module';
import {ContractAddDialogComponent} from '../contract/contract-add-dialog/contract-add-dialog.component';
import {ContractAddDialogModule} from '../contract/contract-add-dialog/contract-add-dialog.module';
import {SearchModule} from '../search/search.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  entryComponents: [
    WorkerAddDialogComponent,
    WorkerEditDialogComponent,
    ContractAddDialogComponent,
  ],
  declarations: [
    WorkerListComponent,
    WorkerManageComponent,
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    ReactiveFormsModule,
    IconModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HiddenTextModule,
    WorkerAddDialogModule,
    WorkerEditDialogModule,
    ContractAddDialogModule,
    SearchModule,
    MatSlideToggleModule,
    FormsModule,
  ]
})
export class WorkerModule {
}
