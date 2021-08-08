import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplymasterComponent } from './applymaster.component';

describe('ApplymasterComponent', () => {
  let component: ApplymasterComponent;
  let fixture: ComponentFixture<ApplymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
