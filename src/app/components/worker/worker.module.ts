import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListComponent } from './worker-list/worker-list.component';
import {ReactiveFormsModule} from '@angular/forms';
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

@NgModule({
  declarations: [WorkerListComponent],
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
    MatProgressSpinnerModule
  ]
})
export class WorkerModule { }
