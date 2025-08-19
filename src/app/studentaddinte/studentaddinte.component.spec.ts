import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaddinteComponent } from './studentaddinte.component';

describe('StudentaddinteComponent', () => {
  let component: StudentaddinteComponent;
  let fixture: ComponentFixture<StudentaddinteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentaddinteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaddinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
