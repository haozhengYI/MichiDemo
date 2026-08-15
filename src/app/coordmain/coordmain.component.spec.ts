import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordmainComponent } from './coordmain.component';

describe('CoordmainComponent', () => {
  let component: CoordmainComponent;
  let fixture: ComponentFixture<CoordmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
