import {IApiService} from '../contracts/data-source.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class ApiService implements IApiService {
  public abstract url: string;
  protected apiUrl = environment.apiUrl.toString();
  protected loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  protected persistSubject = new BehaviorSubject<boolean>(false);
  public persist$ = this.persistSubject.asObservable();
  protected filterSubject = new BehaviorSubject<boolean>(false);
  public filter$ = this.filterSubject.asObservable();
  public headers: HttpHeaders;

  protected constructor(
    protected http: HttpClient,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    this.headers = new HttpHeaders();
    this.headers.set('Access-Control-Allow-Origin', '*');
  }
}
