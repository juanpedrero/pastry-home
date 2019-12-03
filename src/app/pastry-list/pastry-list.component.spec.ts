import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryListComponent } from './pastry-list.component';

describe('PastryListComponent', () => {
  let component: PastryListComponent;
  let fixture: ComponentFixture<PastryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
