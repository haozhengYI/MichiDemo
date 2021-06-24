import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmstudentComponent } from './hmstudent.component';

describe('HmstudentComponent', () => {
  let component: HmstudentComponent;
  let fixture: ComponentFixture<HmstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
