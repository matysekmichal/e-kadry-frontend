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

  @Input() columns: TableColumn<Contract>[] = [
    {label: 'Status', property: 'status', type: 'badge', visible: true},
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Utworzono', property: 'created_at', type: 'text', visible: true},
    {label: 'Akcja', property: 'action', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private contractService: ContractService,
  ) {
    super(injector);
    this.service = contractService;
  }

  addWorker() {
  }

  editWorker(data: any) {
  }
}
