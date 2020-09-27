import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from "@angular/material/form-field";
import {NaviagtionModule} from "./naviagtion/naviagtion.module";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NaviagtionModule,
    MatToolbarModule
  ],
  providers: [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline'
    } as MatFormFieldDefaultOptions
  }
]
})
export class LayoutModule {
}
