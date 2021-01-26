import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import icSearch from '@iconify/icons-ic/twotone-search';
import icInfo from '@iconify/icons-ic/twotone-info';
import {Worker} from '../../worker/worker.entity';
import {WorkerService} from '../../worker/worker.service';

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
  icSearch = icSearch;
  icInfo = icInfo;

  worker: Worker;
  @Output() workerEvent: EventEmitter<Worker> = new EventEmitter<Worker>();

  @Input() columns: TableColumnInterface<Worker>[] = [
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private workerService: WorkerService,
  ) {
    super(injector);
    this.service = workerService;
  }

  selectWorker(Worker: Worker | null) {
    if (this.worker != Worker) {
      this.worker = Worker;
      this.workerEvent.emit(this.worker);
    }
  }

  get filtersResource() {
    return Object.assign(this.baseFilterResource, {
      ShowInactiveContracts: false,
      HasPkzp: true,
    });
  }
}
