import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ResourceDialogData} from '../../../contracts/dialog.interface';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icLabel from '@iconify/icons-ic/twotone-label';
import {EnumService} from '../../../services/enum.service';
import {ContractService} from '../contract.service';
import {Contract} from '../contract.entity';
import {WorkerService} from '../../worker/worker.service';
import {ContractTypes} from '../contract-types';

@Component({
  selector: 'app-contract-update-dialog',
  templateUrl: './contract-update-dialog.component.html',
  styleUrls: ['./contract-update-dialog.component.scss']
})
export class ContractUpdateDialogComponent extends DelegatedFormTemplate<Contract> implements OnInit {

  private refreshAfterClose = false;

  contractTypes = ContractTypes;
  icVisibility = icVisibility;
  icLabel = icLabel;

  constructor(
    private injector: Injector,
    private contractService: ContractService,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<ContractUpdateDialogComponent>,
    private enumService: EnumService,
    @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData<Contract>,
  ) {
    super(injector);
    this.service = contractService;
  }

  ngOnInit(): void {
    if (this.data.resource) {
      this.redirect = this.data.redirect ?? false;
      this.resourceId = this.data.resource.id;
      this.service.get(this.resourceId).subscribe(response => {
        this.resource = response;
      });
    }

    this.dialogRef.beforeClosed().subscribe(() => {
      this.closeDialog();
    });
  }

  onSubmit() {
    this.resource.idJobPosition = this.resource.jobPosition.id;
    this.updateResource(() => {
      this.refreshAfterClose = true;
      this.closeDialog();
    });
  }

  checkJobPosition(id: string) {
    this.resource.idJobPosition = id;
  }

  private closeDialog() {
    this.dialogRef.close({
      refresh: this.refreshAfterClose
    });
  }
}
