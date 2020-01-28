import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryFilteredComponent } from './pastry-filtered.component';

describe('PastryFilteredComponent', () => {
  let component: PastryFilteredComponent;
  let fixture: ComponentFixture<PastryFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastryFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
