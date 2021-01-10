import {Component, Injector, Input, OnInit} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumn} from '../../../contracts/table-column.interface';
import {ContractService} from '../contract.service';
import {Contract} from '../contract.entity';
import icMore from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icLabel from '@iconify/icons-ic/twotone-label';
import icClear from '@iconify/icons-ic/twotone-clear';
import {RangeDate} from '../../../contracts/range-date.model';
import * as moment from 'moment';
import {EnumService} from '../../../services/enum.service';
import {EnumItem} from '../../../contracts/enum';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent extends ListTemplate<Contract> implements OnInit {
  icMore = icMore;
  icAdd = icAdd;
  icEdit = icEdit;
  icDelete = icDelete;
  icSearch = icSearch;
  icLabel = icLabel;
  icClear = icClear;

  jobPosition: number = null;
  showInactiveContracts = false;
  today = new Date();
  public range: RangeDate = {
    start: null,
    end: null
  };

  filters: any = this.storedFilters;

  jobPositions: EnumItem[];

  @Input() columns: TableColumn<Contract>[] = [
    {label: 'Status', property: 'status', type: 'badge', visible: true},
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Stanowisko', property: 'jobPosition', type: 'text', visible: true},
    {label: 'Czas pracy', property: 'workingTime', type: 'text', visible: true},
    {label: 'Wynagrodzenie zasadnicze', property: 'baseSalary', type: 'text', visible: true},
    {label: 'Zatrudniono', property: 'employedAt', type: 'text', visible: true},
    {label: 'Rozwiązano', property: 'employedEndAt', type: 'text', visible: this.showInactiveContracts},
    {label: 'Utworzono', property: 'createdAt', type: 'text', visible: false},
    {label: 'Akcja', property: 'action', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private contractService: ContractService,
    private enumService: EnumService,
  ) {
    super(injector);
    this.service = contractService;

    this.enumService.jobPosition.subscribe(response => {
      this.jobPositions = response;
    })
  }

  addWorker() {
  }

  editWorker(data: any) {
  }

  filterJobPosition($event: number) {
    this.jobPosition = $event;
    this.localFilterChange();
  }

  toggleShowClosedLeads() {
    this.showInactiveContracts = !this.showInactiveContracts;
    this.columns.find(p => p.property == 'employedEndAt').visible = this.showInactiveContracts;

    this.localFilterChange();
  }

  clearRange() {
    this.range.start = null;
    this.range.end = null;
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
      DateFrom: this.range && this.range.start ? moment(this.range.start).format('YYYY-MM-DD') : null,
      DateTo: this.range && this.range.end ? moment(this.range.end).format('YYYY-MM-DD') : null,
    });
  }
}
