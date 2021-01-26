import {Component, Injector, Input, OnInit} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {Worker} from '../worker.entity';
import {WorkerService} from '../worker.service';
import icMore from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icLink from '@iconify/icons-ic/twotone-link';
import icSearch from '@iconify/icons-ic/twotone-search';
import {MatDialog} from '@angular/material/dialog';
import {WorkerAddDialogComponent} from '../worker-add-dialog/worker-add-dialog.component';
import {WorkerEditDialogComponent} from '../worker-edit-dialog/worker-edit-dialog.component';
import {Contract} from '../../contract/contract.entity';
import * as moment from 'moment';

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
  icLink = icLink;
  icSearch = icSearch;

  jobPosition: string = null;
  showInactiveContracts = true;

  filterKey = 'contract-filter';
  filters: any = this.storedFilters;

  @Input() columns: TableColumnInterface<Worker>[] = [
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

  filterJobPosition($event) {
    this.jobPosition = $event;
    this.localFilterChange();
  }

  toggleShowClosedLeads() {
    this.showInactiveContracts = !this.showInactiveContracts;

    this.localFilterChange();
  }

  localFilterChange() {
    this.paginator.pageIndex = 0;
    this.filterChange();
  }

  get filtersResource() {
    return Object.assign(this.baseFilterResource, {
      JobPosition: this.jobPosition,
      ShowInactiveContracts: this.showInactiveContracts,
    });
  }

  filtersPublish(filters) {
    super.filtersPublish(filters);
    this.jobPosition = filters.JobPosition;
    this.showInactiveContracts = filters.ShowInactiveContracts;
  }

  isActiveContract(contracts: Contract[]) {
    let isOrWillBeActive = false;
    contracts.forEach(contract => {
      if (contract.employedEndAt == null || moment(contract.employedEndAt).isBefore()) {
        isOrWillBeActive = true;
      }
    });

    return isOrWillBeActive ? 'bg-green-500' : 'bg-red-500';
  }
}
