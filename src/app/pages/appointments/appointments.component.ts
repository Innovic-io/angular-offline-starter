import {Component, OnInit} from '@angular/core';

import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {AppointmentModel} from '../../models/appointment.model';
import {AppointmentService} from '../../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  currentUser: EmployeeModel;
  appointments: AppointmentModel[];
  deleteAppointment: AppointmentModel[] = [];
  markedAppointments: string[] = [];
  allMarked: string[] = [];
  index: number;
  deleteAllApp: AppointmentModel[] = [];

  constructor(public employee: EmployeeService, public appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.currentUser = this.employee.getLoggedEmployee();
    this.appointments = this.appointmentService.getAllDoctorAppointments(this.currentUser.guid);
  }

  appointmentSelect(event: { checked: boolean, guid: string }) {
    if (event.checked) {
      this.markedAppointments.push(event.guid);
    }
    return this.markedAppointments;
  }

  appointmentSelect1(event) {
    if (event) {
      this.appointments.forEach(app => {
        this.allMarked.push(app.guid);
      });
    }
    return this.allMarked;
  }

  deleteAppointments() {
    this.appointments.forEach(appointment => {
      if (!(this.markedAppointments.includes(appointment.guid))) {
        this.deleteAppointment.push(appointment);
      }
      this.appointmentService.deleteAppointment(this.deleteAppointment);
    });
    return this.appointments = this.deleteAppointment;
  }

  deleteAll() {
    this.appointments.forEach(appointment => {
      if (!(this.allMarked.includes(appointment.guid))) {
        this.deleteAllApp.push(appointment);
      }
      this.appointmentService.deleteAppointment(this.deleteAllApp);
    });
    return this.appointments = this.deleteAllApp;
  }
}
