import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmblogComponent } from './hmblog.component';

describe('HmblogComponent', () => {
  let component: HmblogComponent;
  let fixture: ComponentFixture<HmblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
