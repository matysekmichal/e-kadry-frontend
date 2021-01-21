import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {JobPositionSearchComponent} from './search-components/job-position-search.component';
import {IconModule} from '@visurel/iconify-angular';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {JobPositionComponent} from './search-components/job-position.component';

@NgModule({
  declarations: [
    JobPositionComponent,
    JobPositionSearchComponent,
  ],
  exports: [
    JobPositionComponent,
    JobPositionSearchComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    IconModule,
  ]
})
export class SearchModule {
}
