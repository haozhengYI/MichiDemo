import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostudentComponent } from './costudent.component';

describe('CostudentComponent', () => {
  let component: CostudentComponent;
  let fixture: ComponentFixture<CostudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
