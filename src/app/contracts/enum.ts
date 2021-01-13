export interface Enums {
  [name: string]: EnumItem[];
}

export interface EnumItem {
  id: number | string;
  key: string;
  displayName: string;
}

export function instanceOfEnumItem(object: any): object is EnumItem {
  return object.discriminator === 'EnumItem';
}
