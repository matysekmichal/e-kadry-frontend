import {BehaviorSubject} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {DATA_PLACEHOLDER, DataSourceInterface} from '../contracts/data-source.interface';
import {finalize} from 'rxjs/operators';

export class DataSource<T> extends MatTableDataSource<T> {

  protected dataSubject = new BehaviorSubject<T[]>([]);
  protected loadingSubject = new BehaviorSubject<boolean>(false);
  protected responseSubject = new BehaviorSubject<DataSourceInterface>(DATA_PLACEHOLDER);

  protected service: any;

  public loading$ = this.loadingSubject.asObservable();
  public data$ = this.responseSubject.asObservable();
  public isEmpty = false;

  constructor(service: any) {
    super();
    this.service = service;
  }

  connect(): BehaviorSubject<T[]> {
    return this.dataSubject;
  }

  disconnect(): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

  loadData(page = 1, filters = {}): void {
    this.loadingSubject.next(true);

    Object.keys(filters).map((key, index) => {
      const value = filters[key];

      filters[key] = !value ? '' : value;
    });

    this.service.getAll(page, filters)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((response: DataSourceInterface) => {
        this.dataSubject.next(response.data as T[]);
        this.responseSubject.next(response);

        this.isEmpty = !(response.data.length > 0);
      });
  }
}
