import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrecComponent } from './studentrec.component';

describe('StudentrecComponent', () => {
  let component: StudentrecComponent;
  let fixture: ComponentFixture<StudentrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
