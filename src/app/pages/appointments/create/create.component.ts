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
  providers = [doctor];
  appointment = new AppointmentModel();
  appTypes = enumSelector(AppointmentType);

  constructor(private appointmentService: AppointmentService, private router: Router) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.appointment);
      this.appointmentService.createAppointment(this.appointment);
      this.appointment = new AppointmentModel();
      alert('Appointment is created successfully!');
    }
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
