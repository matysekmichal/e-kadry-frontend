import {DataSourceInterface, IResourceService, ResourceCreatedResponse, ResourceResponse} from '../contracts/data-source.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export abstract class ResourceService<T> extends ApiService implements IResourceService<T> {
  constructor(
    protected http: HttpClient,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    super(http, route, router);
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
