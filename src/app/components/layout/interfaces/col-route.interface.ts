import {Route} from '@angular/router';

export interface ColRoute extends Route {
  children?: ColRoute[];
}

export type ColRoutes = ColRoute[];
