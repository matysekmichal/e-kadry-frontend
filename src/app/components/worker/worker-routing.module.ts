import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ColRoutes} from '../layout/interfaces/col-route.interface';
import {WorkerListComponent} from './worker-list/worker-list.component';

const routes: ColRoutes = [
  {
    path: '',
    component: WorkerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule {
}
