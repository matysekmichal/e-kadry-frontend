import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAddDialogComponent } from './operator-add-dialog.component';

describe('OperatorAddDialogComponent', () => {
  let component: OperatorAddDialogComponent;
  let fixture: ComponentFixture<OperatorAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
