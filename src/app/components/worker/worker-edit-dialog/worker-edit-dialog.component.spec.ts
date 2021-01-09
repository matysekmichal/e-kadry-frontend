import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEditDialogComponent } from './worker-edit-dialog.component';

describe('OperatorAddDialogComponent', () => {
  let component: WorkerEditDialogComponent;
  let fixture: ComponentFixture<WorkerEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
