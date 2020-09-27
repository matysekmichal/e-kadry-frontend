import {Component} from '@angular/core';
import {NavigationService} from "./components/layout/services/naviagtion.service";
import icDashboard from '@iconify/icons-ic/twotone-dashboard';

@Component({
  selector: 'col-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Colesear';

  constructor(
    private navigationService: NavigationService,
  ) {

    this.navigationService.items = [
      {
        type: 'link',
        label: 'Pulpit',
        route: '/dashboard',
        icon: icDashboard
      },
    ];
  }
}
