import {Observable} from 'rxjs';

export interface Data {
  [fieldName: string]: any;
}

interface Meta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface DataSourceInterface {
  data: Data[] | string;
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export const DATA_PLACEHOLDER: DataSourceInterface = {
  data: [],
  page: 1,
  totalPages: 1,
  perPage: 15,
  total: 0
};

export interface IResourceService<T> {
  url: string;
  loading$?: Observable<boolean>;
  filter$?: Observable<boolean>;

  getAll(page: number, filters: { [fieldName: string]: any }): Observable<{ data: T[] } | DataSourceInterface>;
  get(id: string): Observable<{ data: T }>;
  delete(id: string): Observable<object | void>;
  update(id: string, resource: T): Observable<object | void>;
  create(resource: T): Observable<ResourceCreatedResponse>;
}

export interface ResourceCreatedResponse {
  id: string;
}

export interface ResourceResponse {
  data: any;
  status: number;
  message: string;
}
