import {FormControl} from '@angular/forms';
import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SearchService} from '../../services/search.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  template: ''
})
export abstract class Search<T> implements OnInit {
  searchControl: FormControl;
  resource: T[];
  index: string;
  isValue = false;

  @Input() label = 'Wyszukaj';
  @Input() required = false;
  @Input() currentValue: string;
  @Output() selected = new EventEmitter<number | string | null>();
  @Output() selectedName = new EventEmitter<string | null>();
  @Output() formControl = new EventEmitter<FormControl>();

  typingTimer: number;
  typingInterval = 600;
  public authService: AuthService;

  protected constructor(
    protected injector: Injector,
    public searchService: SearchService<T>
  ) {
    this.authService = injector.get(AuthService);
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    if (this.currentValue) {
      this.isValue = true;
    }
  }

  filter() {
    clearTimeout(this.typingTimer);

    if (this.searchControl.value) {
      // @ts-ignore
      this.typingTimer = setTimeout(() => this.search(), this.typingInterval);
    }
  }

  search() {
    this.searchService.search(this.searchControl.value, 5).subscribe((response: T[]) => {
      this.resource = response;
    }, error => {
      console.log(error)
    });
  }

  select($event: MatAutocompleteSelectedEvent | null) {
    if (typeof $event == 'object') {
      this.selected.emit($event.option.id);
      this.selectedName.emit($event.option.value);
    } else {
      this.selected.emit(null);
      this.selectedName.emit(null);
      this.formControl.emit(this.searchControl);
    }
  }

  clear() {
    this.searchControl.setValue(null);
    this.selected.emit(null);
    this.selectedName.emit(null);
    this.isValue = false;
  }
}
