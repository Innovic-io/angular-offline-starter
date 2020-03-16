import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTableComponent } from './medical-table.component';

describe('MedicalTableComponent', () => {
  let component: MedicalTableComponent;
  let fixture: ComponentFixture<MedicalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
