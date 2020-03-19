import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDetailInfoComponent } from './appointment-detail-info.component';

describe('AppointmentDetailInfoComponent', () => {
  let component: AppointmentDetailInfoComponent;
  let fixture: ComponentFixture<AppointmentDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
