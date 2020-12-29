import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkzpAddDialogComponent } from './pkzp-add-dialog.component';

describe('PkzpAddDialogComponent', () => {
  let component: PkzpAddDialogComponent;
  let fixture: ComponentFixture<PkzpAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkzpAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkzpAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
