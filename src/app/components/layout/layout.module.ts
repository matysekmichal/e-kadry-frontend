import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {NavigationModule} from './naviagtion/navigation.module';
import {MessageModule} from './message/message.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AvatarModule} from './avatar/avatar.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    MatToolbarModule,
    MessageModule,
    AvatarModule,
  ],
})
export class LayoutModule {
}
