import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUpdateDialogComponent } from './contract-update-dialog.component';

describe('OperatorAddDialogComponent', () => {
  let component: ContractUpdateDialogComponent;
  let fixture: ComponentFixture<ContractUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
