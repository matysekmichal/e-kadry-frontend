import {Component, OnInit} from '@angular/core';
import {PkzpService} from '../pkzp.service';
import icBalances from '@iconify/icons-ic/twotone-import-export';

@Component({
  selector: 'app-pkzp-accounting',
  templateUrl: './pkzp-accounting.component.html',
  styleUrls: ['./pkzp-accounting.component.scss']
})
export class PkzpAccountingComponent implements OnInit {


  constructor(
    public pkzpService: PkzpService,
  ) {
  }

  ngOnInit(): void {
  }
}
