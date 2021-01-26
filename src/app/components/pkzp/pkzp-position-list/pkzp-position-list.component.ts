import {AfterViewInit, Component, Injector, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {ListTemplate} from '../../../templates/list.template';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions, PageEvent} from '@angular/material/paginator';
import icSearch from '@iconify/icons-ic/twotone-search';
import icInfo from '@iconify/icons-ic/twotone-info';
import {Worker} from '../../worker/worker.entity';
import {PkzpPositionService} from '../pkzp-position.service';
import {PkzpPosition} from '../pkzp-position.entity';
import {DataSource} from '../../../templates/data-source';
import {merge} from 'rxjs';
import {Sort} from '@angular/material/sort';

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
export class PkzpPositionListComponent extends ListTemplate<PkzpPosition> implements OnInit, OnChanges, AfterViewInit {
  icSearch = icSearch;
  icInfo = icInfo;

  @Input() worker: Worker;
  @Input() columns: TableColumnInterface<PkzpPosition>[] = [
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
  ];

  pkzpPositions: PkzpPosition[];

  constructor(
    protected injector: Injector,
    private pkzpPositionService: PkzpPositionService,
  ) {
    super(injector);
    this.service = pkzpPositionService;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getData();
  }

  ngAfterViewInit() {
    console.log(this.worker);
    if (this.sort && this.paginator) {
      this.sort.sortChange.subscribe((r) => {
        this.paginator.pageIndex = 0;
      });

      merge(this.sort.sortChange, this.paginator.page)
        .subscribe((result: Sort | PageEvent) => {
          this.filters.PerPage = this.paginator.page;

          if ('active' in result) {
            this.orderDirection = result.direction;
            this.orderBy = result.active;
          }

          this.filterChange();
        });
    }
    this.cdr.detectChanges();
  }

  get filtersResource() {
    console.log(this.worker)
    return Object.assign(this.baseFilterResource, {
      IdWorker: this.worker ? this.worker.id : null,
    });
  }
}
