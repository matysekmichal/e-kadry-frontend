export class Operator {
  id: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  active: boolean;
  createdAt: Date;

  constructor() {
    this.id = this.firstName = this.lastName = this.login = this.password = this.active = this.createdAt = null;
  }
}
