import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAppointmentsComponent } from './upcoming-appointments.component';

describe('UpcomingAppointmentsComponent', () => {
  let component: UpcomingAppointmentsComponent;
  let fixture: ComponentFixture<UpcomingAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
