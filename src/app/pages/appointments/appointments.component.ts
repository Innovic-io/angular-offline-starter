import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { Observable } from 'rxjs';
import { SystemService } from '../../services/system.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  currentUser: EmployeeModel;
  currentUser$: Observable<EmployeeModel>;
  upcomingAppointments: AppointmentModel[];
  pastAppointments: AppointmentModel[];
  pastAppointments$: Promise<AppointmentModel[]>;
  markedAppointments: string[] = [];

  constructor(
    public employeeService: EmployeeService,
    public appointmentService: AppointmentService,
    public systemService: SystemService,
    public databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    // this.upcomingAppointments = await this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
    // this.pastAppointments = await this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
    this.pastAppointments$ = this.databaseService.getMultiple('appointments', 0, 10);
  }

  /*
  async ngOnInit() {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.upcomingAppointments = await this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
    console.log(this.upcomingAppointments);
    this.pastAppointments = await this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
  }
   */

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

  appointmentSelectAll(event) {
    if (event) {
      this.markedAppointments = this.upcomingAppointments.map(appointment => appointment.guid);
    } else {
      this.markedAppointments = [];
    }
  }

  pastAppointmentSelectAll(event) {
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
    this.systemService.createAlertMessage('Delete completed!');
    this.upcomingAppointments = await this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
    this.pastAppointments = await this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
  }

  setPager(event) {

    this.pastAppointments$ = this.databaseService.getMultiple('appointments', event.currentPage - 1, event.pageSize);
  }
}
