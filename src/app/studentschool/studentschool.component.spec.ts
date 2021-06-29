import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentschoolComponent } from './studentschool.component';

describe('StudentschoolComponent', () => {
  let component: StudentschoolComponent;
  let fixture: ComponentFixture<StudentschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
