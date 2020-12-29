import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ColRoutes} from '../layout/interfaces/col-route.interface';
import {PkzpMainComponent} from './pkzp-main/pkzp-main.component';

const routes: ColRoutes = [
  {
    path: '',
    component: PkzpMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PkzpRoutingModule {
}
