import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppointmentModel } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';

import { AppointmentType, enumSelector, Roles } from '../../../models/system.models';
import { SystemService } from '../../../services/system.service';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { DatabaseService } from '../../../services/database.service';
import { valueReferenceToExpression } from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  providers$: Promise<EmployeeModel[]>;
  appointment = new AppointmentModel();
  appTypes = enumSelector(AppointmentType);
  alert: boolean;
  providers: EmployeeModel[];
  doctorProviders: EmployeeModel[];

  constructor(private appointmentService: AppointmentService,
              public systemService: SystemService,
              private employeeService: EmployeeService,
              private databaseService: DatabaseService) {
  }

  async checkAvailableAppointment(): Promise<boolean> {
    const arrayOfAppointments = await this.appointmentService.getAllUpcomingDoctorAppointments(this.appointment.provider.guid);
    return arrayOfAppointments.some(appointment => this.appointment.date.getTime() === appointment.date.getTime());
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      this.alert = await this.checkAvailableAppointment();
      if (this.alert) {
        return;
      }
      await this.appointmentService.createAppointment(this.appointment);
      this.reset(form);
    }
  }

  reset(form: NgForm) {
    this.appointment = new AppointmentModel();
    form.reset();
  }

  ngOnInit() {
    this.providers$ = this.employeeService.getAllDoctors();
  }
}
