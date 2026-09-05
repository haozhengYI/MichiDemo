import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocontractComponent } from './cocontract.component';

describe('CocontractComponent', () => {
  let component: CocontractComponent;
  let fixture: ComponentFixture<CocontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
