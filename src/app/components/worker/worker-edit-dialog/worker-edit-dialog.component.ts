import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Worker} from '../worker.entity';
import {ResourceDialogData} from '../../../contracts/dialog.interface';
import {WorkerService} from '../worker.service';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import {EnumService} from '../../../services/enum.service';
import {EnumItem, instanceOfEnumItem} from '../../../contracts/enum';

@Component({
  selector: 'app-operator-edit-dialog',
  templateUrl: './worker-edit-dialog.component.html',
  styleUrls: ['./worker-edit-dialog.component.scss']
})
export class WorkerEditDialogComponent extends DelegatedFormTemplate<Worker> implements OnInit {
  private refreshAfterClose = false;
  public genderTypes: EnumItem[];
  public documentTypes: EnumItem[];

  icVisibility = icVisibility;

  constructor(
    private injector: Injector,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<WorkerEditDialogComponent>,
    private enumService: EnumService,
    @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData<Worker>,
  ) {
    super(injector);
    this.service = workerService;
  }

  ngOnInit(): void {
    if (this.data.resource) {
      this.redirect = this.data.redirect ?? false;
      this.resourceId = this.data.resource.id;
      this.service.get(this.resourceId).subscribe(response => {
        this.resource = response;
      })
    }

    this.enumService.gender.subscribe(response => {
      this.genderTypes = response;
    });

    this.enumService.documentType.subscribe(response => {
      this.documentTypes = response;
      this.resource.documentType = this.documentTypes[0].id;
    });
  }

  onSubmit() {
    if (instanceOfEnumItem(this.resource.documentType)) {
      this.resource.documentType = this.resource.documentType.id;
    }

    if (instanceOfEnumItem(this.resource.gender)) {
      this.resource.gender = this.resource.gender.id;
    }

    this.updateResource(() => {
      this.refreshAfterClose = true;
      this.closeDialog();
    });
  }

  private closeDialog() {
    this.dialogRef.close({
      data: {
        refresh: this.refreshAfterClose,
        resource: this.resource,
      }
    });
  }
}
