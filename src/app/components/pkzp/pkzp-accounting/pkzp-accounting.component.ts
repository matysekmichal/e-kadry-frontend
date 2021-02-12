import {Component} from '@angular/core';

@Component({
  selector: 'app-pkzp-accounting',
  templateUrl: './pkzp-accounting.component.html',
  styleUrls: ['./pkzp-accounting.component.scss']
})
export class PkzpAccountingComponent {
  period: string;

  constructor(
  ) {
  }

  fetch($event: string) {
    this.period = $event;
  }
}
