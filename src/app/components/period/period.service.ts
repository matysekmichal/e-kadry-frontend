import {Injectable} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Period} from './period.entity';

@Injectable({
  providedIn: 'root'
})
export class PeriodService extends ResourceService<Period> {
  url = 'periods';

  getToSelect(subMonths: number = 4, nextMonths: number = 4): Observable<Period[]> {
    this.filterSubject.next(true);

    return this.http.get<Period[]>(`${this.apiUrl}${this.url}`, {
      params: Object.assign({
        SubMonths: subMonths,
        NextMonths: nextMonths
      }),
      headers: this.headers
    }).pipe(
      finalize(() => {
        this.filterSubject.next(false);
      })
    );
  }
}
