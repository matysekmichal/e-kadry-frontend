import {Injectable} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Worker} from './worker.entity';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkerService extends ResourceService<Worker>{
  url = 'workers';

  search(searchQuery: { [fieldName: string]: any }): Observable<Worker[]> {
    this.filterSubject.next(true);

    return this.http.get<Worker[]>(`${this.apiUrl}${this.url}/search`, {
      params: searchQuery,
      headers: this.headers
    }).pipe(
      finalize(() => {
        this.filterSubject.next(false);
      })
    );
  }
}
