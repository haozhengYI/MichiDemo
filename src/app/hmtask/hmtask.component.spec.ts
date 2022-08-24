import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtaskComponent } from './hmtask.component';

describe('HmtaskComponent', () => {
  let component: HmtaskComponent;
  let fixture: ComponentFixture<HmtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
