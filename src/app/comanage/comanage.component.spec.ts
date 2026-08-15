import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanageComponent } from './comanage.component';

describe('ComanageComponent', () => {
  let component: ComanageComponent;
  let fixture: ComponentFixture<ComanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
