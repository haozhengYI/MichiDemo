import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentresComponent } from './studentresume.component';

describe('StudentresumeComponent', () => {
  let component: StudentresComponent;
  let fixture: ComponentFixture<StudentresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
