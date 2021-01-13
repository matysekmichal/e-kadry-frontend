export interface ContractType {
  name: string;
  identifierZusNumber: number;
  isSick: boolean;
  isAnnuitant: boolean;
  isPensioner: boolean;
  isHealthy: boolean;
  isLf: boolean;
  isGebf: boolean;
  isLeave: boolean;
  isSickLeave: boolean;
  isPkzp: boolean;
  entireInternship: boolean;
  professionInternship: boolean;
  serviceInternship: boolean;
  jubileeInternship: boolean;
}

export interface ContractTypeFiled<T> {
  value: T;
}

export const ContractTypes: ContractType[] = [
  {
    name: 'Umowa o pracę',
    identifierZusNumber: 110,
    isSick: true,
    isAnnuitant: true,
    isPensioner: true,
    isHealthy: true,
    isLf: true,
    isGebf: false,
    isLeave: true,
    isSickLeave: true,
    isPkzp: true,
    entireInternship: true,
    professionInternship: true,
    serviceInternship: true,
    jubileeInternship: true,
  },
  {
    name: 'Umowa zlecenie',
    identifierZusNumber: 410,
    isSick: false,
    isAnnuitant: false,
    isPensioner: false,
    isHealthy: false,
    isLf: false,
    isGebf: false,
    isLeave: false,
    isSickLeave: false,
    isPkzp: false,
    entireInternship: false,
    professionInternship: false,
    serviceInternship: false,
    jubileeInternship: false,
  },
  {
    name: 'Umowa o dzieło',
    identifierZusNumber: 410,
    isSick: false,
    isAnnuitant: false,
    isPensioner: false,
    isHealthy: false,
    isLf: false,
    isGebf: false,
    isLeave: false,
    isSickLeave: false,
    isPkzp: false,
    entireInternship: false,
    professionInternship: false,
    serviceInternship: false,
    jubileeInternship: false,
  },
]
