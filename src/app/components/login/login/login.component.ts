import {Component} from '@angular/core';
import icLogin from '@iconify/icons-ic/twotone-person';
import icPassword from '@iconify/icons-ic/twotone-lock';
import {Auth} from '../../../contracts/auth';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {MessageService} from '../../layout/services/message.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  icLogin = icLogin;
  icPassword = icPassword;

  protected persistSubject = new BehaviorSubject<boolean>(false);
  public persist$ = this.persistSubject.asObservable();

  public auth: Auth= new Auth();

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {
  }

  onSubmit() {
    this.persistSubject.next(true);
    this.authService.login(this.auth).subscribe(
      () => {
        this.messageService.toast('Zalogowano');
      }, () => {
        this.messageService.toast('Nie udało się zalogować');
        this.persistSubject.next(false)
      }, () => {
        this.router.navigate(['/']).then(() => this.persistSubject.next(false));
      },
    );
  }
}
