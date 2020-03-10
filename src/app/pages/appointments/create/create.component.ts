import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppointmentModel } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';

import { doctor} from '../../../data/dummy';
import { AppointmentType, enumSelector } from '../../../models/system.models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private router: Router) {
  }

  providers = [doctor];
  appointment = new AppointmentModel();
  appTypes = enumSelector(AppointmentType);
  alert: boolean;

  checkAvailableAppointment() {
    const arrayOfAppointments = this.appointmentService.getAllDoctorAppointments(this.appointment.provider.guid);
    const emptyArray = [];

/*    arrayOfAppointments.forEach(appointment => {
      if (this.appointment.date.getTime() === appointment.date.getTime()) {
        emptyArray.push(appointment);
      }
    });
    return emptyArray.length === 1;*/
    return arrayOfAppointments.some(appointment => this.appointment.date.getTime() === appointment.date.getTime());
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.alert = this.checkAvailableAppointment();
      if (this.alert) {
        return;
      }
      this.alert = false;
      this.appointmentService.createAppointment(this.appointment);
      this.appointment = new AppointmentModel();
      alert('Appointment is created successfully!');
      form.reset();
    }
    form.reset();
  }

  cancel() {
    this.backOnDashboard();
  }

  backOnDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
