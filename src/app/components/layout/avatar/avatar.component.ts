import {Component} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  login: string;
  userAcronymSaved: string;
  colorClassSaved: string;

  private colors = [
    'bg-green-800',
    'bg-purple-800',
    'bg-yellow-600',
    'bg-teal-700',
    'bg-teal-900',
    'bg-blue-700',
    'bg-red-700',
    'bg-pink-800',
    'bg-indigo-700',
    'bg-orange-700',
    'bg-gray-900',
  ];

  constructor(
    private authService: AuthService
  ) {
    this.login = authService.user.login;
  }

  get userAcronym() {
    if (!this.userAcronymSaved) {
      const a = this.login.split(".");

      if (a.length >= 2) {
        this.userAcronymSaved = `${a[0].charAt(0)}${a[1].charAt(0)}`;
      } else {
        this.userAcronymSaved = a[0].charAt(0);
      }
    }

    return this.userAcronymSaved;
  }

  get colorClass() {
    if (!this.colorClassSaved) {
      let charactersSum = 0;
      this.login.trim().split('').forEach(char => {
        charactersSum += char.charCodeAt(0);
      });

      console.log(charactersSum);
      console.log(this.colors.length);
      console.log(charactersSum % this.colors.length);

      this.colorClassSaved = this.colors[charactersSum % this.colors.length];
    }

    return this.colorClassSaved;
  }
}
