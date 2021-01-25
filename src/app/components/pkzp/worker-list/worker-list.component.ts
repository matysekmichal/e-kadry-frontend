import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import icSearch from '@iconify/icons-ic/twotone-search';
import icInfo from '@iconify/icons-ic/twotone-info';
import {Contract} from '../../contract/contract.entity';
import {ContractService} from '../../contract/contract.service';
import {Worker} from '../../worker/worker.entity';

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
export class WorkerListComponent extends ListTemplate<Contract> implements OnInit {
  icSearch = icSearch;
  icInfo = icInfo;

  worker: Worker;
  @Output() workerEvent: EventEmitter<Worker> = new EventEmitter<Worker>();

  @Input() columns: TableColumnInterface<Contract>[] = [
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private contractService: ContractService,
  ) {
    super(injector);
    this.service = contractService;
  }

  selectWorker(contract: Contract | null) {
    if (this.worker != contract.worker) {
      this.worker = contract.worker;
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
