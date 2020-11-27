import {Component, OnInit} from '@angular/core';
import icLogin from '@iconify/icons-ic/twotone-person';
import icPassword from '@iconify/icons-ic/twotone-lock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  icLogin = icLogin;
  icPassword = icPassword;

  constructor() {
  }

  ngOnInit(): void {
  }

}
