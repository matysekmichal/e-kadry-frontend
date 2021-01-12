export interface ResourceDialogData<T> {
  redirect: boolean;
  resource: T;
}

export interface ResourcePkzpAddDialogData<T> extends ResourceDialogData<T> {
  workerId: string;
}

export interface ResourceContractAddDialogData<T> extends ResourceDialogData<T> {
  worker: Worker;
}
