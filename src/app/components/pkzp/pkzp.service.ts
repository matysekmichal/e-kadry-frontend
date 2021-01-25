import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ResourceCreatedResponse, ResourceResponse} from '../../contracts/data-source.interface';
import {finalize, map} from 'rxjs/operators';
import {PkzpPositionCreateOrUpdate} from './pkzp-position.entity';
import {ApiService} from '../../services/api.service';
import {environment} from '../../../environments/environment';
import {PkzpParameters} from './pkzp-parameters.interface';
import {Pkzp} from './pkzp.entity';

@Injectable({
  providedIn: 'root'
})
export class PkzpService extends ApiService {
  url = 'pkzp';
  private _parameters: PkzpParameters;

  create(resource: PkzpPositionCreateOrUpdate): Observable<ResourceCreatedResponse> {
    this.persistSubject.next(true);

    return this.http.post<ResourceCreatedResponse>(`${this.apiUrl}${this.url}`, resource, {
      headers: this.headers
    }).pipe(finalize(() => this.persistSubject.next(false)));
  }

  summary(workerId: string): Observable<Pkzp[]> {
    this.loadingSubject.next(true);

    return this.http.get<Pkzp[]>(`${this.apiUrl}${this.url}/${workerId}`, {
      headers: this.headers
    }).pipe(finalize(() => this.loadingSubject.next(false)));
  }

  parameter() {
    if (!this._parameters) {
      return this.parametersRequest().pipe(
        map(parameters => {
          this._parameters = parameters;
          return parameters;
        })
      );
    }

    return of(this._parameters);
  }

  private parametersRequest() {
    return this.http.get<PkzpParameters>(`${environment.apiUrl}${this.url}/parameters`)
      .pipe(
        map(parameters => {
          this._parameters = parameters;
          return parameters;
        })
      );
  }
}
