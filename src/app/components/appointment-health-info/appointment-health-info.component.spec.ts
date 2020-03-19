import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentHealthInfoComponent } from './appointment-health-info.component';

describe('AppointmentHealthInfoComponent', () => {
  let component: AppointmentHealthInfoComponent;
  let fixture: ComponentFixture<AppointmentHealthInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentHealthInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
