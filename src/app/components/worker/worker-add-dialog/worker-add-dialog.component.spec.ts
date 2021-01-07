import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAddDialogComponent } from './worker-add-dialog.component';

describe('OperatorAddDialogComponent', () => {
  let component: WorkerAddDialogComponent;
  let fixture: ComponentFixture<WorkerAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
