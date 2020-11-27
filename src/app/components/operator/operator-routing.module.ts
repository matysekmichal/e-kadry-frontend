import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ColRoutes} from '../layout/interfaces/col-route.interface';
import {OperatorListComponent} from './operator-list/operator-list.component';

const routes: ColRoutes = [
  {
    path: '',
    component: OperatorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule {
}
