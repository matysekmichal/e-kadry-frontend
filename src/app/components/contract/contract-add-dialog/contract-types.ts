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
    entireInternship: number;
    professionInternship: number;
    serviceInternship: number;
    jubileeInternship: number;
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
    entireInternship: 1,
    professionInternship: 1,
    serviceInternship: 1,
    jubileeInternship: 1,
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
    entireInternship: 0,
    professionInternship: 0,
    serviceInternship: 0,
    jubileeInternship: 0,
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
    entireInternship: 0,
    professionInternship: 0,
    serviceInternship: 0,
    jubileeInternship: 0,
  },
]
