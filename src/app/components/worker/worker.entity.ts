import {EnumItem} from '../../contracts/enum';

export class Worker {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date | string;
  cityOfBirthday: string;
  pesel: string;
  documentType: EnumItem;
  documentNumber: string;
  gender: EnumItem;
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
    this.id = this.firstName = this.lastName = this.birthday = this.cityOfBirthday = this.pesel = this.documentType = this.documentNumber = this.gender
      = this.city = this.street = this.propertyNumber = this.zipCode = this.city = this.country =this.apartmentNumber = this.actNumber = this.motherName = this.fatherName
      = this.phone = this.createdAt = null;
  }
}
