import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {Worker} from '../../worker/worker.entity';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {WorkerService} from '../../worker/worker.service';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import icMore from '@iconify/icons-ic/twotone-read-more';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icCancel from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';

@Component({
  selector: 'app-pkzp-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: {
        formFieldAppearance: 'legacy',
        hidePageSize: true
      } as MatPaginatorDefaultOptions
    }
  ]
})
export class WorkerListComponent extends ListTemplate<Worker> implements OnInit {
  icMore = icMore;
  icAdd = icAdd;
  icEdit = icEdit;
  icCancel = icCancel;
  icSearch = icSearch;

  workerId: string;
  @Output() workerIdEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input() columns: TableColumnInterface<Worker>[] = [
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Akcja', property: 'action', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private workerService: WorkerService,
  ) {
    super(injector);
    this.service = workerService;
  }

  selectWorker(worker: Worker | null) {
    if (this.workerId != worker.id) {
      this.workerId = worker.id;
      this.workerIdEvent.emit(this.workerId);
    }
  }

  cancelWorker()
  {
    this.workerId = null;
    this.workerIdEvent.emit(this.workerId);
  }
}
