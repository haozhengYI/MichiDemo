import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooschoolComponent } from './cooschool.component';

describe('CooschoolComponent', () => {
  let component: CooschoolComponent;
  let fixture: ComponentFixture<CooschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
