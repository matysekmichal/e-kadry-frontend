import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Worker} from '../worker.entity';
import {ResourceDialogData} from '../../../contracts/dialog.interface';
import {WorkerService} from '../worker.service';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import {EnumService} from '../../../services/enum.service';
import {EnumItem} from '../../../contracts/enum';

@Component({
  selector: 'app-worker-add-dialog',
  templateUrl: './worker-add-dialog.component.html',
  styleUrls: ['./worker-add-dialog.component.scss']
})
export class WorkerAddDialogComponent extends DelegatedFormTemplate<Worker> implements OnInit {
  private refreshAfterClose = false;
  public genderTypes: EnumItem[];
  public documentTypes: EnumItem[];

  icVisibility = icVisibility;

  constructor(
    private injector: Injector,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<WorkerAddDialogComponent>,
    private enumService: EnumService,
    @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData<Worker>,
  ) {
    super(injector);
    this.service = workerService;

    this.dialogRef.beforeClosed().subscribe(() => {
      this.closeDialog();
    });
  }

  ngOnInit(): void {
    if (this.data.resource) {
      this.redirect = this.data.redirect ?? false;
      this.resource = this.data.resource;
      this.resourceId = this.data.resource.id;
    } else {
      this.resource = new Worker();
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
    if (this.resourceId) {
      this.updateResource(() => {
        this.refreshAfterClose = true;
        this.dialogRef.close()
      });
    } else {
      this.createResource(() => {
        this.refreshAfterClose = true;
        this.dialogRef.close()
      });
    }
  }

  private closeDialog() {
    this.dialogRef.close({
      data: {
        refresh: this.refreshAfterClose
      }
    });
  }
}
