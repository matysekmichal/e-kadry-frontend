import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ResourceCreatedResponse} from '../../contracts/data-source.interface';
import {finalize, map} from 'rxjs/operators';
import {PkzpPositionCreateOrUpdate} from './pkzp-position.entity';
import {ApiService} from '../../services/api.service';
import {environment} from '../../../environments/environment';
import {PkzpParameters} from './pkzp-parameters.interface';

@Injectable({
  providedIn: 'root'
})
export class PkzpService extends ApiService {
  url = 'pkzp';
  _parameters: PkzpParameters;

  create(resource: PkzpPositionCreateOrUpdate): Observable<ResourceCreatedResponse> {
    this.persistSubject.next(true);

    return this.http.post<ResourceCreatedResponse>(`${this.apiUrl}${this.url}`, resource, {
      headers: this.headers
    }).pipe(finalize(() => this.persistSubject.next(false)));
  }

  parameter() {
    console.log('param')
    console.log(this._parameters);
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
