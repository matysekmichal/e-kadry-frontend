import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenTextComponent } from './hidden-text.component';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';



@NgModule({
  declarations: [HiddenTextComponent],
  exports: [
    HiddenTextComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    IconModule
  ]
})
export class HiddenTextModule { }
