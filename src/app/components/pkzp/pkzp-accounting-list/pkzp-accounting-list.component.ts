import {Component, Injector, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PkzpAccountingService} from '../pkzp-accounting.service';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {Worker} from '../../worker/worker.entity';
import {PkzpPosition} from '../pkzp-position.entity';

@Component({
  selector: 'app-pkzp-accounting-list',
  templateUrl: './pkzp-accounting-list.component.html',
  styleUrls: ['./pkzp-accounting-list.component.scss']
})
export class PkzpAccountingListComponent extends ListTemplate<Worker> implements OnInit, OnChanges {
  @Input() period: string;
  @Input() columns: TableColumnInterface<Worker>[] = [
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Wkłady PKZP', property: 'contributions', type: 'text', visible: true},
    {label: 'Spłaty pożyczek', property: 'repayments', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    public pkzpAccountingService: PkzpAccountingService,
  ) {
    super(injector);
    this.service = pkzpAccountingService;
  }

  ngOnInit(): void {
    this.filters = this.filtersResource;
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.period) {
      this.getData();
    }
  }

  get filtersResource() {
    return Object.assign(this.baseFilterResource, {
      PeriodId: this.period,
    });
  }

  pkzpContributions(pkzpPositions: PkzpPosition[]) {
    var total = 0;
    pkzpPositions.filter(p => p.pkzpPositionType == 10).forEach(pp => total += pp.amount);
    return total > 0 ? null : 'some';
  }

  pkzpRepayments(pkzpPositions: PkzpPosition[]) {
    let total = 0;

    pkzpPositions.filter(p => p.pkzpPositionType == 30).forEach(pp => pp.pkzpSchedules.forEach(ps => {
      if (!ps.isClosed) {
        total += ps.price;
      }
    }));

    return total;
  }
}
