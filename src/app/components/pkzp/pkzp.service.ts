import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ResourceCreatedResponse} from '../../contracts/data-source.interface';
import {finalize} from 'rxjs/operators';
import {PkzpPositionCreateOrUpdate} from './pkzp-position.entity';
import {ApiService} from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PkzpService extends ApiService {
  url = 'pkzp';

  create(resource: PkzpPositionCreateOrUpdate): Observable<ResourceCreatedResponse> {
    this.persistSubject.next(true);

    return this.http.post<ResourceCreatedResponse>(`${this.apiUrl}${this.url}`, resource, {
      headers: this.headers
    }).pipe(finalize(() => this.persistSubject.next(false)));
  }
}
