import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HminterviewComponent } from './hminterview.component';

describe('HminterviewComponent', () => {
  let component: HminterviewComponent;
  let fixture: ComponentFixture<HminterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HminterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HminterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
