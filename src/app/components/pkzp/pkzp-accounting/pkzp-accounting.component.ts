import {Component, OnInit} from '@angular/core';
import {PkzpService} from '../pkzp.service';

@Component({
  selector: 'app-pkzp-accounting',
  templateUrl: './pkzp-accounting.component.html',
  styleUrls: ['./pkzp-accounting.component.scss']
})
export class PkzpAccountingComponent implements OnInit {
  period: string;

  constructor(
    public pkzpService: PkzpService,
  ) {
  }

  ngOnInit(): void {
  }

  fetch($event: string) {
    this.period = $event;
  }
}
