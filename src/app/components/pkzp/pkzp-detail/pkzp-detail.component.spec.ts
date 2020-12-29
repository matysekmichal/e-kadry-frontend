import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkzpDetailComponent } from './pkzp-detail.component';

describe('PkzpDetailComponent', () => {
  let component: PkzpDetailComponent;
  let fixture: ComponentFixture<PkzpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkzpDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkzpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
