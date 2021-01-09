import {DataSourceInterface, IResourceService, ResourceCreatedResponse, ResourceResponse} from '../contracts/data-source.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class ResourceService<T> implements IResourceService<T> {
  public abstract url: string;
  protected apiUrl = environment.apiUrl.toString();
  protected loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  protected persistSubject = new BehaviorSubject<boolean>(false);
  public persist$ = this.persistSubject.asObservable();
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

  getAll(page = 1, filters: { [fieldName: string]: any } = {}): Observable<{ data: T[] } | DataSourceInterface> {
    this.loadingSubject.next(true);

    if (Object.values(filters).filter(item => !!item).length) {
      this.filterSubject.next(true);
    } else {
      this.filterSubject.next(false);
    }

    return this.http.get<{ data: T[] }>(`${this.apiUrl}${this.url}`, {
      params: Object.assign({
        Page: page.toString()
      }, filters),
      headers: this.headers
    }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);

        if (this.filterSubject.value == true) {
          this.filterSubject.next(false);
        }
      })
    );
  }

  get(id: number | string): Observable<T> {
    this.loadingSubject.next(true);

    return this.http.get<T>(`${this.apiUrl}${this.url}/${id}`)
      .pipe(finalize(() => this.loadingSubject.next(false)));
  }

  delete(id: number | string): Observable<object> {
    this.persistSubject.next(true);

    return this.http.delete<object>(`${this.apiUrl}${this.url}/${id}`, {
      headers: this.headers
    }).pipe(finalize(() => this.persistSubject.next(false)));
  }

  update(id: number | string, resource: T): Observable<ResourceResponse> {
    this.persistSubject.next(true);

    return this.http.put<ResourceResponse>(`${this.apiUrl}${this.url}/${id}`, resource, {
      headers: this.headers
    }).pipe(finalize(() => this.persistSubject.next(false)));
  }

  create(resource: T): Observable<ResourceCreatedResponse> {
    this.persistSubject.next(true);

    return this.http.post<ResourceCreatedResponse>(`${this.apiUrl}${this.url}`, resource, {
      headers: this.headers
    }).pipe(finalize(() => this.persistSubject.next(false)));
  }
}
