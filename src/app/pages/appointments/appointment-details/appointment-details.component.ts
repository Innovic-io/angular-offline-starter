import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppointmentModel, DiagnosisModel, InvoiceModel } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';
import { HealthInfoModel } from '../../../models/employee.model';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  appointment: AppointmentModel;

  constructor(
              public route: ActivatedRoute,
              public appointmentService: AppointmentService,
              public systemService: SystemService) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    console.log(id);
    this.appointment = this.appointmentService.getAppointmentByID(id);
    console.log(this.appointment);

  }

  onUpdateAppointment(appointment: AppointmentModel | HealthInfoModel | DiagnosisModel | InvoiceModel, type: string, guid) {
    this.appointmentService.updateAppointment(this.appointment, type, guid);
    this.systemService.createAlertMessage('Appointment is updated!');
  }

}
