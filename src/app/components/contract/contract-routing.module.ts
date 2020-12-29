import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ColRoutes} from '../layout/interfaces/col-route.interface';
import {ContractListComponent} from './contract-list/contract-list.component';

const routes: ColRoutes = [
  {
    path: '',
    component: ContractListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
