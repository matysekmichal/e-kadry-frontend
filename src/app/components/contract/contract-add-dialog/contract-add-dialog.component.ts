import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ResourceDialogData} from '../../../contracts/dialog.interface';
import {DelegatedFormTemplate} from '../../../templates/delegated-form.template';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icLabel from '@iconify/icons-ic/twotone-label';
import {EnumService} from '../../../services/enum.service';
import {EnumItem} from '../../../contracts/enum';
import {ContractService} from '../contract.service';
import {Contract} from '../contract.entity';
import {FormControl} from '@angular/forms';
import {WorkerService} from '../../worker/worker.service';
import {SearchQuery} from './search.query';
import {Worker} from '../../worker/worker.entity';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-contract-add-dialog',
  templateUrl: './contract-add-dialog.component.html',
  styleUrls: ['./contract-add-dialog.component.scss']
})
export class ContractAddDialogComponent extends DelegatedFormTemplate<Contract> implements OnInit {

  private refreshAfterClose = false;
  genderTypes: EnumItem[];
  documentTypes: EnumItem[];
  jobPositions: EnumItem[];

  icVisibility = icVisibility;
  icLabel = icLabel;

  searchForm = new FormControl();
  searchQuery = new SearchQuery();
  typingTimer: number;
  typingInterval = 600;
  searchResult: Worker[];

  constructor(
    private injector: Injector,
    private contractService: ContractService,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<ContractAddDialogComponent>,
    private enumService: EnumService,
    @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData<Contract>,
  ) {
    super(injector);
    this.service = contractService;

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
      this.resource = new Contract();
    }

    this.enumService.gender.subscribe(response => {
      this.genderTypes = response;
    });

    this.enumService.jobPosition.subscribe(response => {
      this.jobPositions = response;
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

  filter() {
    clearTimeout(this.typingTimer);

    if (this.searchForm.value) {
      // @ts-ignore
      this.typingTimer = setTimeout(() => this.search(), this.typingInterval);
    }
  }

  search() {
    this.searchQuery.searchKey = this.searchForm.value;
    this.workerService.search(this.searchQuery).subscribe((response) => {
      this.searchResult = response;
    }, error => {
      console.log(error);
    });
  }

  private closeDialog() {
    this.dialogRef.close({
      data: {
        refresh: this.refreshAfterClose
      }
    });
  }

  select($event: MatAutocompleteSelectedEvent) {
    this.resource.idWorker = $event.option.id;
  }
}
