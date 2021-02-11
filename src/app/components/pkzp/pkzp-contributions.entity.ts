import {Worker} from '../worker/worker.entity';

export class PkzpContributions {
  Id: number;
  IdWorker: number;
  Worker: Worker;
  Amount: number;
  UpdatedAt: Date | string;

  constructor() {
  }
}
