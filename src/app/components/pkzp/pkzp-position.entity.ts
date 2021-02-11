import {Period} from '../period/period.entity';
import {Pkzp} from './pkzp.entity';
import {Worker} from '../worker/worker.entity';
import {EnumItem} from '../../contracts/enum';

export class PkzpPosition {
  id: string;
  pkzpPositionType: string | EnumItem;
  amount: number;
  idPeriod: string;
  period: Period;
  idWorker: string;
  worker: Worker;
  idAncestorPkzpPosition: string;
  ancestorPkzpPosition: Pkzp;
  pkzp: Pkzp[];
  createdAt: Date;

  constructor() {
    this.id = this.pkzpPositionType = this.amount = this.idPeriod = this.period = this.idWorker = this.worker = this.idAncestorPkzpPosition
      = this.createdAt = this.ancestorPkzpPosition = null;
    this.pkzp = [];
  }
}

export class PkzpPositionCreateOrUpdate {
  id: string;
  pkzpPositionType: number;
  displayPkzpPositionType: number;
  periodId: string;
  period: Period;
  workerId: string;
  worker: Worker;
  amount: number;
  installmentsCount: number;
  installmentAmount: number;

  constructor() {
    this.id = this.pkzpPositionType = this.displayPkzpPositionType = this.periodId = this.period = this.workerId = this.worker = this.amount
      = this.installmentsCount = this.installmentAmount = null;
  }
}
