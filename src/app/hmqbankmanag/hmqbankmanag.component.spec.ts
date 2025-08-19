import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmqbankmanagComponent } from './hmqbankmanag.component';

describe('HmqbankmanagComponent', () => {
  let component: HmqbankmanagComponent;
  let fixture: ComponentFixture<HmqbankmanagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmqbankmanagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmqbankmanagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
