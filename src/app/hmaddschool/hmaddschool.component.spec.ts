import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmaddschoolComponent } from './hmaddschool.component';

describe('HmaddschoolComponent', () => {
  let component: HmaddschoolComponent;
  let fixture: ComponentFixture<HmaddschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmaddschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmaddschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
