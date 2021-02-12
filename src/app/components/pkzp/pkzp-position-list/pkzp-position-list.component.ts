import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import {Worker} from '../../worker/worker.entity';
import {PkzpPositionService} from '../pkzp-position.service';
import {PkzpPosition} from '../pkzp-position.entity';
import icAdd from '@iconify/icons-ic/twotone-add';
import icSetting from '@iconify/icons-ic/twotone-settings';

@Component({
  selector: 'app-pkzp-position-list',
  templateUrl: './pkzp-position-list.component.html',
  styleUrls: ['./pkzp-position-list.component.scss'],
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
export class PkzpPositionListComponent extends ListTemplate<PkzpPosition> implements OnInit {
  icAdd = icAdd;
  icSetting = icSetting;

  paymentTypes = [10, 30, 40, 50];

  pkzpPositions: PkzpPosition[];
  @Input() worker: Worker;
  @Input() columns: TableColumnInterface<PkzpPosition>[] = [
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Okres', property: 'period', type: 'text', visible: true},
    {label: 'Wartość', property: 'amount', type: 'text', visible: true},
    {label: 'Utworzono', property: 'createdAt', type: 'text', visible: true},
  ];
  @Output() addRecord = new EventEmitter<boolean>();

  filters: any = null;

  constructor(
    protected injector: Injector,
    private pkzpPositionService: PkzpPositionService,
  ) {
    super(injector);
    this.service = pkzpPositionService;
  }

  ngOnInit(): void {
    this.filters = this.filtersResource;
    super.ngOnInit();
  }

  get filtersResource() {
    return Object.assign(this.baseFilterResource, {
      WorkerId: this.worker?.id,
      OrderBy: 'createdAt',
    });
  }

  callAddRecord() {
    this.addRecord.emit(true);
  }

  isPayment(type: number) {
    return this.paymentTypes.findIndex(x => x == type) >= 0;
  }
}
