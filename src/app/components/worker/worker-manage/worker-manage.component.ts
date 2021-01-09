import {Component, Injector, OnInit} from '@angular/core';
import {FormTemplate} from '../../../templates/form.template';
import {WorkerService} from '../worker.service';
import {Worker} from '../worker.entity';
import icEdit from '@iconify/icons-ic/twotone-edit';
import {WorkerEditDialogComponent} from '../worker-edit-dialog/worker-edit-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-worker-manage',
  templateUrl: './worker-manage.component.html',
  styleUrls: ['./worker-manage.component.scss']
})
export class WorkerManageComponent extends FormTemplate implements OnInit {
  icEdit = icEdit;

  resource: Worker;

  constructor(
    protected injector: Injector,
    public workerService: WorkerService,
    private dialog: MatDialog,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.workerService.get(this.resourceId).subscribe(response => {
      this.resource = response;
    });
  }

  editWorker() {
    const dialogRef = this.dialog.open(WorkerEditDialogComponent, {
      data: {
        resource: this.resource,
      },
      disableClose: true,
      autoFocus: false,
      maxWidth: 600,
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(next => {
      if (next.data.resource) {
        this.resource = next.data.resource;
      }
    });
  }
}
