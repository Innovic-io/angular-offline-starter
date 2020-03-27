import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { SystemService } from '../../services/system.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.css']
})
export class MyDocumentsComponent implements OnInit {
  currentUser: EmployeeModel;
  currentUser$: Observable<EmployeeModel>;
  pastAppointments: AppointmentModel[];
  pastAppointments$: Promise<AppointmentModel[]>;
  pastAppointmentsCount$: Promise<number>;
  markedAppointments: string[] = [];

  constructor(public employeeService: EmployeeService,
              public appointmentService: AppointmentService,
              public systemService: SystemService) {
  }

  ngOnInit() {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.pastAppointmentsCount$ = this.appointmentService.getAllPastDoctorAppointmentsCount(this.currentUser.guid);
  }

  async convertToPDF(event) {
    await this.systemService.printToPDF(event);
  }

  appointmentSelect(event: { checked: boolean, guid: string }) {
    if (event.checked) {
      this.markedAppointments.push(event.guid);
    } else {
      const guidIndex = this.markedAppointments.indexOf(event.guid);
      this.markedAppointments.splice(guidIndex, 1);
    }
  }

  async pastAppointmentSelectAll(event) {
    this.pastAppointments = await this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
    if (event) {
      this.markedAppointments = this.pastAppointments.map(appointment => appointment.guid);
      console.log(this.markedAppointments);
    } else {
      this.markedAppointments = [];
    }
  }

  deleteAppointments() {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.markedAppointments.forEach(appointmentGUID => this.appointmentService.deleteAppointments(appointmentGUID));
    }
    this.pastAppointments$ = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
  }

  setPager(event) {
    // tslint:disable-next-line:max-line-length
    this.pastAppointments$ = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid, event.currentPage - 1, event.pageSize);
  }
}
