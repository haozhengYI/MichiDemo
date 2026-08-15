import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorderComponent } from './coorder.component';

describe('CoorderComponent', () => {
  let component: CoorderComponent;
  let fixture: ComponentFixture<CoorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
