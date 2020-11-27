import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperatorRoutingModule} from './operator-routing.module';
import {OperatorListComponent} from './operator-list/operator-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {OperatorAddDialogModule} from './operator-add-dialog/operator-add-dialog.module';
import {MessageService} from '../layout/services/message.service';
import {OperatorAddDialogComponent} from './operator-add-dialog/operator-add-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  entryComponents: [
    OperatorAddDialogComponent
  ],
  declarations: [
    OperatorListComponent
  ],
  imports: [
    CommonModule,
    OperatorRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    MatTooltipModule,
    MatMenuModule,
    ReactiveFormsModule,
    OperatorAddDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    MessageService,
  ]
})
export class OperatorModule {
}
