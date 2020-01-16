import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLoginUserComponent } from './dropdown-login-user.component';

describe('DropdownLoginUserComponent', () => {
  let component: DropdownLoginUserComponent;
  let fixture: ComponentFixture<DropdownLoginUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLoginUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
