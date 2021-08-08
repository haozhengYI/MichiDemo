import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplybachelorComponent } from './applybachelor.component';

describe('ApplybachelorComponent', () => {
  let component: ApplybachelorComponent;
  let fixture: ComponentFixture<ApplybachelorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplybachelorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplybachelorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
