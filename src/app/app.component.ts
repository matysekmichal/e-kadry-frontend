import {Component} from '@angular/core';
import {NavigationService} from './components/layout/services/naviagtion.service';
import {LoadingService} from './components/layout/services/loading.service';
import icDashboard from '@iconify/icons-ic/twotone-dashboard';
import icPKZP from '@iconify/icons-ic/twotone-history-edu';
import icContracts from '@iconify/icons-ic/twotone-contact-page';
import icWorkers from '@iconify/icons-ic/twotone-people-alt';
import icOperators from '@iconify/icons-ic/twotone-supervisor-account';

@Component({
  selector: 'col-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Colesear';

  constructor(
    private navigationService: NavigationService,
    private loadingService: LoadingService
  ) {

    this.navigationService.items = [
      {
        type: 'link',
        label: 'Pulpit',
        route: '/dashboard',
        icon: icDashboard
      },
      {
        type: 'link',
        label: 'PKZP',
        route: '/pkzp',
        icon: icPKZP,
      },
      {
        type: 'link',
        label: 'Umowy',
        route: '/contracts',
        icon: icContracts,
      },
      {
        type: 'link',
        label: 'Pracownicy',
        route: '/workers',
        icon: icWorkers,
      },
      {
        type: 'link',
        label: 'Operatorzy',
        route: '/operators',
        icon: icOperators,
      },
    ];
  }
}
