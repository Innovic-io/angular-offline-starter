import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AppointmentModel} from '../../../models/appointment.model';
import {AppointmentService} from '../../../services/appointment.service';

import {doctor } from '../../../data/dummy';
import {AppointmentType, enumSelector} from '../../../models/system.models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  providers = [doctor];
  appointment = new AppointmentModel();
  appTypes = enumSelector(AppointmentType);
  alert: boolean;

  constructor(private appointmentService: AppointmentService) {
  }

  checkAvailableAppointment() {
    const arrayOfAppointments = this.appointmentService.getAllDoctorAppointments(this.appointment.provider.guid);

    return arrayOfAppointments.some(appointment => this.appointment.date.getTime() === appointment.date.getTime());
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.alert = this.checkAvailableAppointment();
      if (this.alert) {
        return;
      }
      console.log(form.value);
      this.appointmentService.createAppointment(this.appointment);
      this.appointment = new AppointmentModel();
      alert('Appointment is created successfully!');
      form.reset();
    }
  }

  reset(form: NgForm) {
    form.reset();
  }


  ngOnInit(): void {
  }
}
