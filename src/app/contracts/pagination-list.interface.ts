import {SortDirection} from '@angular/material/sort';

export interface PaginationListInterface {
  Page: number;
  PerPage: number;
  OrderDirection: SortDirection;
  OrderBy: string;
  Search: string;
}
