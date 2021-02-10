import {Component} from '@angular/core';
import {NavigationService} from '../../services/naviagtion.service';
import icLogout from '@iconify/icons-ic/twotone-power-settings-new';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  icLogout = icLogout;

  items = this.navigationService.items;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
  ) {
  }

  logout() {
    this.authService.logout();
  }
}
