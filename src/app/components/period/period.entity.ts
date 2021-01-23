export class Period {
  id: string;
  dateFrom: Date | string;
  dateTo: Date | string;
  days: number;
  workingDays: number;
  workingHours: number;
  pkzpPosition: number;

  constructor() {
    this.id = this.dateFrom = this.dateTo = this.days = this.workingDays = this.workingHours = this.pkzpPosition = null;
  }
}
