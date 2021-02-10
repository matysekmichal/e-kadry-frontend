import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from '../components/layout/services/message.service';
import {Auth} from '../contracts/auth';
import {map} from 'rxjs/operators';
import {Operator} from '../components/operator/operator.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl + 'auth';
  private jwtHelper: JwtHelperService;
  decodedToken: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  login(login: Auth) {
    return this.http.post(this.baseUrl, login)
      .pipe(
        map((response: any) => {
          if (response) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('operator', btoa(encodeURIComponent(escape(JSON.stringify(response.user)))));
            this.decodedToken = this.jwtHelper.decodeToken(response.token);
          }
        })
      );
  }

  get user(): Operator {
    return JSON.parse(unescape(decodeURIComponent(atob(localStorage.getItem('who')))));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('operator');

    this.router.navigate(['/login']).then(r => this.messageService.toast('Wylogowano'));

    return true;
  }

  isLogin() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    if (this.jwtHelper.isTokenExpired(token)) {
      localStorage.removeItem('token');

      return false;
    }

    return true;
  }

  unauthorizedHandler(error: any) {
    const token = localStorage.getItem('token');

    if (token && this.jwtHelper.isTokenExpired(token)) {
      this.messageService.toast("Twoja sesja wygasła - zaloguj się ponownie");
      this.logout();
    } else {
      this.messageService.toast(error.error.message);
    }
  }
}
