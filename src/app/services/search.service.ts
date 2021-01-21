import {ISearchService} from '../contracts/data-source.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class SearchService<T> implements ISearchService<T> {
  public abstract url: string;
  protected apiUrl = environment.apiUrl.toString();
  protected filterSubject = new BehaviorSubject<boolean>(false);
  public filter$ = this.filterSubject.asObservable();
  public headers: HttpHeaders;

  constructor(
    protected http: HttpClient,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    this.headers = new HttpHeaders();
    this.headers.set('Access-Control-Allow-Origin', '*');
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
