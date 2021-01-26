import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkzpPositionListComponent } from './pkzp-position-list.component';

describe('WorkerListComponent', () => {
  let component: PkzpPositionListComponent;
  let fixture: ComponentFixture<PkzpPositionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkzpPositionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkzpPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
