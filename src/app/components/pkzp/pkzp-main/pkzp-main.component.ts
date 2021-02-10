import {Component, OnInit} from '@angular/core';
import {Worker} from '../../worker/worker.entity';
import icManage from '@iconify/icons-ic/twotone-playlist-add-check';
import icBack from '@iconify/icons-ic/twotone-reply';
import icExport from '@iconify/icons-ic/twotone-file-upload';

@Component({
  selector: 'app-pkzp-main',
  templateUrl: './pkzp-main.component.html',
  styleUrls: ['./pkzp-main.component.scss']
})
export class PkzpMainComponent implements OnInit {
  icManage = icManage;
  icBack = icBack;
  icExport = icExport;

  worker: Worker;
  isAccounting = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectWorker($event: Worker) {
    this.worker = $event;
  }

  export() {

  }

  accounting() {
    this.isAccounting = !this.isAccounting;
  }
}
