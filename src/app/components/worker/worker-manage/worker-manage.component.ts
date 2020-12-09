import {Component, Injector, OnInit} from '@angular/core';
import {FormTemplate} from '../../../templates/form.template';
import {WorkerService} from '../worker.service';
import {Worker} from '../worker.entity';
import icEdit from '@iconify/icons-ic/twotone-edit';

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
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.workerService.get(this.resourceId).subscribe(response => {
      this.resource = response;
    });
  }

}
