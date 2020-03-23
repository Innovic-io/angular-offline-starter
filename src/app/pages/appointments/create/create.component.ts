import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppointmentModel } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';

import { doctor } from '../../../data/dummy';
import { AppointmentType, enumSelector } from '../../../models/system.models';
import { SystemService } from '../../../services/system.service';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  providers: EmployeeModel[];
  providers$: Observable<EmployeeModel[]>;
  appointment = new AppointmentModel();
  appTypes = enumSelector(AppointmentType);
  alert: boolean;

  constructor(private appointmentService: AppointmentService,
              public systemService: SystemService,
              private employeeService: EmployeeService,
              private databaseService: DatabaseService) {
  }

  async checkAvailableAppointment() {
    const arrayOfAppointments = await this.appointmentService.getAllUpcomingDoctorAppointments(this.appointment.provider.guid);

    return arrayOfAppointments.some(appointment => this.appointment.date.getTime() === appointment.date.getTime());
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // this.alert = this.checkAvailableAppointment();
      // if (this.alert) {
      //   return;
      // }
      this.appointmentService.createAppointment(this.appointment);
      this.reset(form);
      this.systemService.createAlertMessage('Appointment created!');
    }
  }

  reset(form: NgForm) {
    this.appointment = new AppointmentModel();
    form.reset();
  }


   async ngOnInit() {
    // this.providers = await this.employeeService.getAllEmployees();
    this.providers$ = await this.employeeService.getAllEmployees();
  }
}
