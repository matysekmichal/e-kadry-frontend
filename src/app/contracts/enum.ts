export interface Enums {
  [name: string]: EnumItem[];
}

export interface EnumItem {
  id: number | string;
  key: string;
  displayName: string;
}
