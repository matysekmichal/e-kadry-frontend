import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {ErrorRoutingModule} from './error.routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
  ]
})
export class ErrorModule {
}
