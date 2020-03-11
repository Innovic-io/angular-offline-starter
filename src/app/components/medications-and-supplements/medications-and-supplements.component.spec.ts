import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsAndSupplementsComponent } from './medications-and-supplements.component';

describe('MedicationsAndSupplementsComponent', () => {
  let component: MedicationsAndSupplementsComponent;
  let fixture: ComponentFixture<MedicationsAndSupplementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationsAndSupplementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsAndSupplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
