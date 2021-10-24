import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmoschoolComponent } from './hmoschool.component';

describe('HmoschoolComponent', () => {
  let component: HmoschoolComponent;
  let fixture: ComponentFixture<HmoschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmoschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmoschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
