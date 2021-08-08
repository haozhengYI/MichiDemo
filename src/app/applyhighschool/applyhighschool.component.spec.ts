import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyhighschoolComponent } from './applyhighschool.component';

describe('ApplyhighschoolComponent', () => {
  let component: ApplyhighschoolComponent;
  let fixture: ComponentFixture<ApplyhighschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyhighschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyhighschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
