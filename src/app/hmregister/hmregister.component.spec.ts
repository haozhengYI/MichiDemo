import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmregisterComponent } from './hmregister.component';

describe('HmregisterComponent', () => {
  let component: HmregisterComponent;
  let fixture: ComponentFixture<HmregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
