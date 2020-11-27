export interface ProcessingDialogData {
  message: string;
}

export interface ErrorDialogData {
  title: string;
  message: string | string[];
}

export interface InfoDialogData {
  title: string;
  text: string;
  button: string;
  icon: boolean;
}

export interface ConfirmDialogData {
  title: string;
  text: string;
  confirmButton: string;
  rejectButton: string;
  confirmed: () => {};
  rejected: () => {};
}
