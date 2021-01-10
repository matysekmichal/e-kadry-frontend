import {Worker} from '../worker/worker.entity';
import {JobPosition} from './job-position.entity';

export class Contract {
  id: string;
  employedAt: Date;
  employedEndAt: Date;
  baseSalary: number;
  idJobPosition: string;
  jobPosition: JobPosition;
  idWorker: string;
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
  isPkzp: boolean;
  entireInternship: number;
  professionInternship: number;
  serviceInternship: number;
  jubileeInternship: number;
  createdAt: Date;

  constructor() {
    this.id = this.employedAt = this.employedEndAt = this.baseSalary = this.idJobPosition = this.jobPosition = this.idWorker = this.identifierZusNumber = this.isSick
      = this.isAnnuitant = this.isPensioner = this.isHealthy = this.isLf = this.isGebf = this.isLeave = this.isSickLeave = this.isPkzp = this.entireInternship
      = this.professionInternship = this.serviceInternship = this.jubileeInternship = this.createdAt = null;

    this.worker = new Worker();
  }
}
