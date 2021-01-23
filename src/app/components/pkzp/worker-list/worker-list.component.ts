import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import icSearch from '@iconify/icons-ic/twotone-search';
import icInfo from '@iconify/icons-ic/twotone-info';
import {Contract} from '../../contract/contract.entity';
import {ContractService} from '../../contract/contract.service';
import * as moment from 'moment';

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

  workerId: string;
  @Output() workerIdEvent: EventEmitter<string> = new EventEmitter<string>();

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
    if (this.workerId != contract.worker.id) {
      this.workerId = contract.worker.id;
      this.workerIdEvent.emit(this.workerId);
    }
  }

  get filtersResource() {
    return Object.assign(this.baseFilterResource, {
      ShowInactiveContracts: false,
      HasPkzp: true,
    });
  }
}
