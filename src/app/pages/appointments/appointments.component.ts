import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { Observable } from 'rxjs';
import { SystemService } from '../../services/system.service';

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
  markedAppointments: string[] = [];

  constructor(public employeeService: EmployeeService, public appointmentService: AppointmentService, public systemService: SystemService) {
  }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.upcomingAppointments = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
    this.pastAppointments = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
  }
  exportToPDFActiveApp(event, name) {
    this.systemService.exportAsPDF(event, name);
  }
  exportToPDFPastApp(event, name) {
    this.systemService.exportAsPDF(event, name);
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

  deleteAppointments() {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.markedAppointments.forEach(appointmentGUID => this.appointmentService.deleteAppointments(appointmentGUID));
    }
    this.systemService.createAlertMessage('Delete completed!');
    this.upcomingAppointments = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid);
    this.pastAppointments = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
  }
}
