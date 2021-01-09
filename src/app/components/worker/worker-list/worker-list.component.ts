import {Component, Injector, Input, OnInit} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumn} from '../../../contracts/table-column.interface';
import {Worker} from '../worker.entity';
import {WorkerService} from '../worker.service';
import icMore from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import {MatDialog} from '@angular/material/dialog';
import {WorkerAddDialogComponent} from '../worker-add-dialog/worker-add-dialog.component';
import {OperatorEditDialogComponent} from '../../operator/operator-edit-dialog/operator-edit-dialog.component';
import {WorkerEditDialogComponent} from '../worker-edit-dialog/worker-edit-dialog.component';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent extends ListTemplate<Worker> implements OnInit {
  icMore = icMore;
  icAdd = icAdd;
  icEdit = icEdit;
  icDelete = icDelete;
  icSearch = icSearch;

  @Input() columns: TableColumn<Worker>[] = [
    {label: 'Status', property: 'status', type: 'badge', visible: true},
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Utworzono', property: 'created_at', type: 'text', visible: true},
    {label: 'Akcja', property: 'action', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private workerService: WorkerService,
    private dialog: MatDialog,
  ) {
    super(injector);
    this.service = workerService;
  }

  addWorker() {
    this.dialog.open(WorkerAddDialogComponent, {
      data: {},
      disableClose: true,
      autoFocus: false,
      maxWidth: 600,
      width: '100%',
    });
  }

  editWorker(resource: Worker) {
    const dialogRef = this.dialog.open(WorkerEditDialogComponent, {
      data: {
        resource: resource,
      },
      disableClose: true,
      autoFocus: false,
      maxWidth: 600,
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(next => {
      if (next.data.refresh == true) {
        this.getData();
      }
    });
  }
}
