import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkzpAccountingComponent } from './pkzp-accounting.component';

describe('PkzpDetailComponent', () => {
  let component: PkzpAccountingComponent;
  let fixture: ComponentFixture<PkzpAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkzpAccountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkzpAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
