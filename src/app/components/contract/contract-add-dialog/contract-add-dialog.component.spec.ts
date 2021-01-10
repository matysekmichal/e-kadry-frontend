import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAddDialogComponent } from './contract-add-dialog.component';

describe('OperatorAddDialogComponent', () => {
  let component: ContractAddDialogComponent;
  let fixture: ComponentFixture<ContractAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
