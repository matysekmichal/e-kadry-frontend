import {Component, Injector, Input, OnInit} from '@angular/core';
import {TableColumnInterface} from '../../../contracts/table-column.interface';
import {Operator} from '../operator.entity';
import {OperatorService} from '../operator.service';
import {ListTemplate} from '../../../templates/list.template';
import {MatDialog} from '@angular/material/dialog';
import {OperatorAddDialogComponent} from '../operator-add-dialog/operator-add-dialog.component';
import {OperatorEditDialogComponent} from '../operator-edit-dialog/operator-edit-dialog.component';
import icMore from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent extends ListTemplate<Operator> implements OnInit {
  icMore = icMore;
  icAdd = icAdd;
  icEdit = icEdit;
  icDelete = icDelete;
  icSearch = icSearch;

  @Input() columns: TableColumnInterface<Operator>[] = [
    {label: 'Status', property: 'status', type: 'badge', visible: true},
    {label: 'Imię i nazwisko', property: 'name', type: 'text', visible: true},
    {label: 'Utworzono', property: 'created_at', type: 'text', visible: true},
    {label: 'Akcja', property: 'action', type: 'text', visible: true},
  ];

  constructor(
    protected injector: Injector,
    private operatorService: OperatorService,
    private dialog: MatDialog,
  ) {
    super(injector);
    this.service = operatorService;
  }

  addOperator() {
    const dialogRef = this.dialog.open(OperatorAddDialogComponent, {
      data: {},
      disableClose: true,
      autoFocus: false,
      minWidth: 400
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.refresh) {
        this.getData();
      }
    });
  }

  editOperator(resource: Operator) {
    const dialogRef = this.dialog.open(OperatorEditDialogComponent, {
      data: {
        resource: resource,
      },
      disableClose: true,
      autoFocus: false,
      minWidth: 400
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.refresh) {
        this.getData();
      }
    });
  }
}
