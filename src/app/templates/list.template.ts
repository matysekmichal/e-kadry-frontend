import {AfterViewInit, ChangeDetectorRef, Component, Injector, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FormControl} from '@angular/forms';
import {DataSource} from './data-source';
import {MatSort, Sort, SortDirection} from '@angular/material/sort';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {IResourceService, ResourceResponse} from '../contracts/data-source.interface';
import {TableColumn} from '../contracts/table-column.interface';
import {merge} from 'rxjs';
import {PaginationListInterface} from '../contracts/pagination-list.interface';
import {ResourceId} from '../contracts/resource-id';
import {MessageService} from '../components/layout/services/message.service';

@Component({
  template: ''
})
export abstract class ListTemplate<T> implements OnInit, AfterViewInit, OnDestroy {
  service: IResourceService<T>;
  resource: T[];
  columns: TableColumn<T>[];
  pageSizeOptions: number[] = [15, 30, 50, 150];
  pageSize = this.pageSizeOptions[0];
  dataSource: DataSource<T> | null;
  selection = new SelectionModel<T>(true, []);
  orderDirection: SortDirection = 'desc';
  orderBy = 'id';
  filterKey: string;
  filters: any = this.filtersResource;
  searchControl = new FormControl();
  typingTimer: number;
  typingInterval = 800;
  private cdr: ChangeDetectorRef;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  protected messageService: MessageService;

  protected constructor(
    protected injector: Injector
  ) {
    this.cdr = injector.get(ChangeDetectorRef);
    this.messageService = injector.get(MessageService);
  }

  ngOnInit(): void {
    this.dataSource = new DataSource<T>(this.service);

    this.searchControl.valueChanges.subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.getData();

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

  getData() {
    this.paginator.pageIndex = this.filters.page_index ? this.filters.page_index : 0;
    this.dataSource.loadData(this.paginator.pageIndex + 1, this.filters);
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }

    clearTimeout(this.typingTimer);

    this.typingTimer = window.setTimeout(() => {
      value = value.trim().toLowerCase();

      if (value.length > 2 || value.length === 0) {
        this.filters.Search = value;
        this.filterChange();
      }
    }, this.typingInterval);
  }

  filterChange() {
    localStorage.removeItem(this.filterKey);
    this.filters = this.storedFilters;
    this.dataSource.loadData(this.filters.Page, this.storedFilters);
  }

  get storedFilters() {
    if (this.filterKey) {
      let currentFilters = localStorage.getItem(this.filterKey)
        ? JSON.parse(unescape(decodeURIComponent(atob(localStorage.getItem(this.filterKey)))))
        : null;

      if (!currentFilters) {
        currentFilters = this.filtersResource;
        localStorage.setItem(this.filterKey, btoa(encodeURIComponent(escape(JSON.stringify(currentFilters)))));
      }

      this.filtersPublish(currentFilters);

      return currentFilters;
    }

    return this.filtersResource;
  }

  filtersPublish(filters): void {
  }

  get filtersResource(): PaginationListInterface {
    return this.baseFilterResource;
  }

  get baseFilterResource(): PaginationListInterface {
    return {
      Page: this.paginator ? this.paginator.pageIndex + 1 : 1,
      PerPage: this.paginator ? this.paginator.pageSize : this.pageSize,
      OrderDirection: this.orderDirection,
      OrderBy: this.orderBy,
      Search: this.searchControl ? this.searchControl.value : '',
    };
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  deleteResource(item: ResourceId) {
    this.messageService.confirm('Czy napewno chcesz kontynuować?', 'Potwierdzenie spowoduje usunięcie zasobu.', null, null, () => {
      this.service.delete(item.id).subscribe(
        (response: ResourceResponse) => {
          this.dataSource.loadData(this.paginator.pageIndex + 1, this.filters);
          this.messageService.toast(response.message);
        }, (error: ResourceResponse) => {
          this.messageService.error(error.message);
        }
      );
    });
  }

  ngOnDestroy(): void {
  }
}
