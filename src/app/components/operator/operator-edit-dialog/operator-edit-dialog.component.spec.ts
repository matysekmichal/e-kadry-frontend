import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorEditDialogComponent } from './operator-edit-dialog.component';

describe('OperatorAddDialogComponent', () => {
  let component: OperatorEditDialogComponent;
  let fixture: ComponentFixture<OperatorEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
