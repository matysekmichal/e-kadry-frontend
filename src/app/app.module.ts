import {BrowserModule} from '@angular/platform-browser';
import * as moment from 'moment';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthGuard} from "./guards/auth.guard";
import {LayoutModule} from "./components/layout/layout.module";

registerLocaleData(localePl, 'pl');
moment.locale('pl');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [
    AuthGuard,
    {provide: LOCALE_ID, useValue: 'pl'},
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
