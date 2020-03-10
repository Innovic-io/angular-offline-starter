import {Component, Input, OnInit} from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  currentUser: EmployeeModel;
  appointments: AppointmentModel[];
  markedAppointments: string[] = [];

  constructor(public employee: EmployeeService, public appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.currentUser = this.employee.getLoggedEmployee();
    this.appointments = this.appointmentService.getAllDoctorAppointments(this.currentUser.guid);
  }

  appointmentSelect(event: { checked: boolean, guid: string }) {
    if (event.checked) {
      this.markedAppointments.push(event.guid);
    } else {
      this.markedAppointments = [];
    }
  }

  appointmentSelectAll(event) {
    if (event) {
      this.markedAppointments = this.appointments.map(appointment => appointment.guid);
    } else {
      this.markedAppointments = [];
    }
  }

  deleteAppointments() {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.markedAppointments.forEach(appointmentGUID => this.appointmentService.deleteAppointments(appointmentGUID));
    }

    this.appointments = this.appointmentService.getAllDoctorAppointments(this.currentUser.guid);
  }
}
