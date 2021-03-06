import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Enums} from '../contracts/enum';

type EnumType = 'documentType' | 'gender' | 'jobPosition' | 'pkzpType' | 'pkzpPositionType';

@Injectable({
  providedIn: 'root'
})
export class EnumService {
  private _enums: Enums;

  constructor(private http: HttpClient) {
  }

  get gender() {
    return this._getOrReturn('gender');
  }

  get documentType() {
    return this._getOrReturn('documentType');
  }

  get jobPosition() {
    return this._getOrReturn('jobPosition');
  }

  get pkzpType() {
    return this._getOrReturn('pkzpType');
  }

  get pkzpPositionType() {
    return this._getOrReturn('pkzpPositionType')
  }

  refresh() {
    return this.http.get<Enums>(`${environment.apiUrl}enums`)
      .pipe(
        map(enums => {
          this._enums = enums;
          return enums;
        })
      );
  }

  clearEnums() {
    this._enums = null;
  }

  private _getOrReturn(type: EnumType) {
    if (!this._enums) {
      return this.refresh()
        .pipe(
          map(enums => {
            this._enums = enums;

            return enums[type];
          })
        );
    }

    return of(this._enums[type]);
  }
}
