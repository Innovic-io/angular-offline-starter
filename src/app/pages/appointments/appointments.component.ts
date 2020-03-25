import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: [ './appointments.component.css' ]
})
export class AppointmentsComponent implements OnInit {
  currentUser: EmployeeModel;
  currentUser$: Observable<EmployeeModel>;
  upcomingAppointments$: Promise<AppointmentModel[]>;
  upcomingAppointmentsCount$: Promise<number>;
  upcomingAppointments: AppointmentModel[];
  pastAppointments: AppointmentModel[];
  pastAppointments$: Promise<AppointmentModel[]>;
  pastAppointmentsCount$: Promise<number>;
  markedAppointments: string[] = [];

  constructor(
    public employeeService: EmployeeService,
    public appointmentService: AppointmentService,
    public systemService: SystemService) {
  }

  ngOnInit() {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.upcomingAppointmentsCount$ = this.appointmentService.getAllUpcomingDoctorAppointmentsCount(this.currentUser.guid);
    this.pastAppointmentsCount$ = this.appointmentService.getAllPastDoctorAppointmentsCount(this.currentUser.guid);
  }

  async exportToPDFActiveApp(event, name) {
    await this.systemService.exportAsPDF(event, name);
  }

  async exportToPDFPastApp(event, name) {
    await this.systemService.exportAsPDF(event, name);
  }

  appointmentSelect(event: { checked: boolean, guid: string }) {
    if (event.checked) {
      this.markedAppointments.push(event.guid);
    } else {
      const guidIndex = this.markedAppointments.indexOf(event.guid);
      this.markedAppointments.splice(guidIndex, 1);
    }
  }

  async appointmentSelectAll(event) {
    this.upcomingAppointments = await this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
    if (event) {
      this.markedAppointments = this.upcomingAppointments.map(appointment => appointment.guid);
    } else {
      this.markedAppointments = [];
    }
  }

  async pastAppointmentSelectAll(event) {
    this.pastAppointments = await this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
    if (event) {
      this.markedAppointments = this.pastAppointments.map(appointment => appointment.guid);
    } else {
      this.markedAppointments = [];
    }
  }

  async deleteAppointments() {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.markedAppointments.forEach(appointmentGUID => this.appointmentService.deleteAppointments(appointmentGUID));
    }

    this.upcomingAppointments$ = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid, 1);
    this.pastAppointments$ = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
  }

  setPager(event) {
    // tslint:disable-next-line:max-line-length
    this.pastAppointments$ = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid, event.currentPage - 1, event.pageSize);
    // tslint:disable-next-line:max-line-length
    this.upcomingAppointments$ = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid, event.currentPage - 1, event.pageSize);
  }
}
