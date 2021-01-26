import {EnumItem} from '../../contracts/enum';

export class Pkzp {
  id: string;
  idWorker: string;
  worker: Worker;
  balance: number;
  debit: number;
  credit: number;
  repayment: number;
  pkzpType: number | string | EnumItem
  idPkzpPosition: string;
  // TODO: Add pkzpPosition
  pkzpPosition: any;

  constructor() {
    this.id = this.idWorker = this.worker = this.balance = this.debit = this.credit = this.pkzpType = this.idPkzpPosition = this.pkzpPosition = null;
  }
}
