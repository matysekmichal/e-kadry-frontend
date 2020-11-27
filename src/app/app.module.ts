import {BrowserModule} from '@angular/platform-browser';
import * as moment from 'moment';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MAT_DATE_LOCALE, MAT_RIPPLE_GLOBAL_OPTIONS} from '@angular/material/core';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';
import {authInterceptorProvider} from './interceptors/auth.interceptor';
import {errorInterceptorProvider} from './interceptors/error.interceptor';
import {MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions, MatPaginatorIntl} from '@angular/material/paginator';
import {getPolishPaginatorIntl} from './utils/polish-paginator-intl';
import {RippleGlobalOptions} from '@angular/material/core/ripple/ripple';
import {MessageService} from './components/layout/services/message.service';
import {AuthService} from './services/auth.service';
import {LayoutModule} from './components/layout/layout.module';

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
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    MessageService,
    authInterceptorProvider,
    errorInterceptorProvider,
    {provide: LOCALE_ID, useValue: 'pl'},
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    {provide: MatPaginatorIntl, useValue: getPolishPaginatorIntl()},
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: {
        formFieldAppearance: 'legacy',
      } as MatPaginatorDefaultOptions
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      } as MatFormFieldDefaultOptions
    },
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        disabled: true,
      } as RippleGlobalOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
