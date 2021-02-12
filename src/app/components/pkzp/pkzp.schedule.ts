import {PkzpPosition} from './pkzp-position.entity';

export class PkzpSchedule {
  price: number;
  period: string;
  idPeriod: string;
  idPkzpPosition: string | null;
  pkzpPosition: PkzpPosition | null;
  isClosed: boolean;
}
