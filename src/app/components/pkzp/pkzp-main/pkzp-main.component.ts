import {Component, OnInit} from '@angular/core';
import {Worker} from '../../worker/worker.entity';

@Component({
  selector: 'app-pkzp-main',
  templateUrl: './pkzp-main.component.html',
  styleUrls: ['./pkzp-main.component.scss']
})
export class PkzpMainComponent implements OnInit {
  worker: Worker;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectWorker($event: Worker) {
    this.worker = $event;
  }
}
