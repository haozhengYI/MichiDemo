import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmstudentrecComponent } from './hmstudentrec.component';

describe('HmstudentrecComponent', () => {
  let component: HmstudentrecComponent;
  let fixture: ComponentFixture<HmstudentrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmstudentrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmstudentrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
