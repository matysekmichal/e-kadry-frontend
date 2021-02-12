import {Injectable} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Observable} from 'rxjs';
import {DataSourceInterface} from '../../contracts/data-source.interface';
import {finalize} from 'rxjs/operators';
import {Worker} from '../worker/worker.entity';

@Injectable({
  providedIn: 'root'
})
export class PkzpAccountingService extends ResourceService<Worker> {
  url = 'pkzp';

  getAll(page = 1, filters: { [fieldName: string]: any } = {}): Observable<{ data: Worker[] } | DataSourceInterface> {
    this.loadingSubject.next(true);

    if (Object.values(filters).filter(item => !!item).length) {
      this.filterSubject.next(true);
    } else {
      this.filterSubject.next(false);
    }

    return this.http.get<{ data: Worker[] }>(`${this.apiUrl}${this.url}/accounting`, {
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
}
