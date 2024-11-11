import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmmanagedComponent } from './hmmanaged.component';

describe('HmmanagedComponent', () => {
  let component: HmmanagedComponent;
  let fixture: ComponentFixture<HmmanagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmmanagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmmanagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
