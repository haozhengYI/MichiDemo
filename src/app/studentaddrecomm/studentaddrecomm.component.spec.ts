import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaddrecommComponent } from './studentaddrecomm.component';

describe('StudentaddrecommComponent', () => {
  let component: StudentaddrecommComponent;
  let fixture: ComponentFixture<StudentaddrecommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentaddrecommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaddrecommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
