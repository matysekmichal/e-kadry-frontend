import {ISearchService} from '../contracts/data-source.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export abstract class SearchService<T> extends ApiService implements ISearchService<T> {
  constructor(
    protected http: HttpClient,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    super(http, route, router);
  }

  search(value: string, perPage: number): Observable<T[]> {
    this.filterSubject.next(true);

    return this.http.get<T[]>(`${this.apiUrl}${this.url}`, {
      params: Object.assign({
        Search: value,
        PerPage: perPage
      }),
      headers: this.headers
    }).pipe(
      finalize(() => {
        this.filterSubject.next(false);
      })
    );
  }
}
