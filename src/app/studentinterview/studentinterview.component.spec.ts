import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinterviewComponent } from './studentinterview.component';

describe('StudentinterviewComponent', () => {
  let component: StudentinterviewComponent;
  let fixture: ComponentFixture<StudentinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
