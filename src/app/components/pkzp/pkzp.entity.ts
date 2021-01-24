import {EnumItem} from '../../contracts/enum';

export class Pkzp {
  id: string;
  idWorker: string;
  worker: Worker;
  balance: number;
  debit: number;
  credit: number;
  pkzpType: number
  displayPkzpType: number | string | EnumItem;
  idPkzpPosition: string;
  // TODO: Add pkzpPosition
  pkzpPosition: any;
  // TODO: Add pkzpSchedules
  pkzpSchedules: any[];

  constructor() {
    this.id = this.idWorker = this.worker = this.balance = this.debit = this.credit = this.pkzpType = this.displayPkzpType = this.idPkzpPosition = this.pkzpPosition = null;
    this.pkzpSchedules = [];
  }
}
