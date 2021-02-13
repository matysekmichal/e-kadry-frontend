import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkzpAccountingListComponent } from './pkzp-accounting-list.component';

describe('PkzpDetailComponent', () => {
  let component: PkzpAccountingListComponent;
  let fixture: ComponentFixture<PkzpAccountingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkzpAccountingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkzpAccountingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
