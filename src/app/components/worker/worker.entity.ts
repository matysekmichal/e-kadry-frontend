export class Worker {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date | string;
  cityOfBirthday: string;
  pesel: string;
  documentType: number;
  documentNumber: string;
  gender: number;
  city: string;
  street: string;
  propertyNumber: string;
  apartmentNumber: string;
  actNumber: string;
  motherName: string;
  fatherName: string;
  phone: string;
  createdAt: Date;

  constructor() {
    this.id = this.firstName = this.lastName = this.birthday = this.cityOfBirthday = this.pesel = this.documentType = this.documentNumber = this.gender
      = this.city = this.street = this.propertyNumber = this.apartmentNumber = this.actNumber = this.motherName = this.fatherName = this.phone = this.createdAt = null;
  }
}
