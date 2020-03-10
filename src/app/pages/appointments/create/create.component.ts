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

    arrayOfAppointments.forEach(appointment => {
      const availableTimeAfter = appointment.date.getTime() + 15 * 60000;
      const availableTimeBefore = appointment.date.getTime() - 15 * 60000;
      const a = this.appointment.date.getTime();

      console.log(availableTimeBefore);
      console.log(availableTimeAfter);
      console.log(a);

      if (a < availableTimeBefore || a > availableTimeAfter) {
        this.alert = false;
      }
      this.alert = true;
    });

    console.log(this.alert);
    return this.alert;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.checkAvailableAppointment() === true) {
        // form.reset();
        console.log('Nesto');
      }
      this.appointmentService.createAppointment(this.appointment);
      this.appointment = new AppointmentModel();
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
