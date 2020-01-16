import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLoginBakerComponent } from './dropdown-login-baker.component';

describe('DropdownLoginBakerComponent', () => {
  let component: DropdownLoginBakerComponent;
  let fixture: ComponentFixture<DropdownLoginBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLoginBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLoginBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
