import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryCardComponent } from './pastry-card.component';

describe('PastryCardComponent', () => {
  let component: PastryCardComponent;
  let fixture: ComponentFixture<PastryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
