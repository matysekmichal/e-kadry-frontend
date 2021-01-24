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

export interface IApiService {
  url: string;
  loading$?: Observable<boolean>;
  persist$?: Observable<boolean>;
  filter$?: Observable<boolean>;
}

export interface IResourceService<T> extends IApiService {
  getAll(page: number, filters: { [fieldName: string]: any }): Observable<{ data: T[] } | DataSourceInterface>;

  get(id: string): Observable<T>;

  delete(id: string): Observable<object | void>;

  update(id: string, resource: T): Observable<ResourceResponse>;

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

export interface ISearchService<T> {
  url: string;
  filter$?: Observable<boolean>;

  search(value: string, perPage: number): Observable<T[]>;
}
