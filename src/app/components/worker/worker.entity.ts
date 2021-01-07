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
  street: string;
  propertyNumber: string;
  city: string;
  zipCode: string;
  country: string;
  apartmentNumber: string;
  actNumber: string;
  motherName: string;
  fatherName: string;
  phone: string;
  createdAt: Date;

  constructor() {
    this.id = this.firstName = this.lastName = this.cityOfBirthday = this.pesel = this.documentType = this.documentNumber = this.gender
      = this.city = this.street = this.propertyNumber = this.zipCode = this.city = this.country =this.apartmentNumber = this.actNumber = this.motherName = this.fatherName
      = this.phone = this.createdAt = null;

    this.birthday = new Date();
  }
}
