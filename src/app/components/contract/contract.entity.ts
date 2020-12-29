import {Worker} from '../worker/worker.entity';

export class Contract {
  id: string;
  employedAt: Date;
  worker: Worker;
  identifierZusNumber: string;
  isSick: boolean;
  isAnnuitant: boolean;
  isPensioner: boolean;
  isHealthy: boolean;
  isLf: boolean;
  isGebf: boolean;
  isLeave: boolean;
  isSickLeave: boolean;
  entireInternship: number;
  professionInternship: number;
  serviceInternship: number;
  jubileeInternship: number;
  createdAt: Date;

  constructor() {
    this.id = this.employedAt = this.identifierZusNumber = this.isSick = this.isAnnuitant = this.isPensioner = this.isHealthy = this.isLf = this.isGebf
      = this.isLeave = this.isSickLeave = this.entireInternship = this.professionInternship = this.serviceInternship = this.jubileeInternship = this.createdAt = null;

    this.worker = new Worker();
  }
}
