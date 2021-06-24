import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmschoolComponent } from './hmschool.component';

describe('HmschoolComponent', () => {
  let component: HmschoolComponent;
  let fixture: ComponentFixture<HmschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
