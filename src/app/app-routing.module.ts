import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout/layout.component';
import {AuthGuard} from './guards/auth.guard';
import {ColRoutes} from './components/layout/interfaces/col-route.interface';

const childrenRoutes: ColRoutes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'operators',
    loadChildren: () => import('./components/operator/operator.module').then(m => m.OperatorModule),
  },
  {
    path: '**',
    loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule),
  },
];

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
