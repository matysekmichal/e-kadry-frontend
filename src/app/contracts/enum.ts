export interface Enums {
  [name: string]: EnumItem[];
}

export interface EnumItem {
  id: number;
  key: string;
  displayName: string;
}
