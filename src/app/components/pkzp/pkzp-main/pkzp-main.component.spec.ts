import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PkzpMainComponent} from './pkzp-main.component';

describe('PkzpMainComponent', () => {
  let component: PkzpMainComponent;
  let fixture: ComponentFixture<PkzpMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PkzpMainComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkzpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
