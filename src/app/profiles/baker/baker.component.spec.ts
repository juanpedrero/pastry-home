import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerComponent } from './baker.component';

describe('BakerComponent', () => {
  let component: BakerComponent;
  let fixture: ComponentFixture<BakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
