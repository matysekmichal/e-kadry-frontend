import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pkzp-main',
  templateUrl: './pkzp-main.component.html',
  styleUrls: ['./pkzp-main.component.scss']
})
export class PkzpMainComponent implements OnInit {
  workerId: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectWorker($event: string) {
    this.workerId = $event;
  }
}
