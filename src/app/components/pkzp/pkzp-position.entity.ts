import {Period} from '../period/period.entity';

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
