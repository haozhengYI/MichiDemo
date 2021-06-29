import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmordersearchComponent } from './hmordersearch.component';

describe('HmordersearchComponent', () => {
  let component: HmordersearchComponent;
  let fixture: ComponentFixture<HmordersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmordersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmordersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
