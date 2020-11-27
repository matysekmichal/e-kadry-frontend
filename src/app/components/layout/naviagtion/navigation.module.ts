import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation/navigation.component';
import {NavigationItemComponent} from './navigation-item/navigation-item.component';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
    IconModule
  ]
})
export class NavigationModule {
}
