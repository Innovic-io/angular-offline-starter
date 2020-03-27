import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { AppointmentModel } from '../../models/appointment.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentService } from '../../services/appointment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser$: Observable<EmployeeModel>;
  currentUser: EmployeeModel;
  appointments$: Promise<AppointmentModel[]>;
  appointmentsCount: number;
  appointmentsTitle = 'New Patient Appointment';

  constructor(public employeeService: EmployeeService, private appointmentService: AppointmentService) {}

  async confirmedButton(event) {
    await this.appointmentService.confirmAppointment(this.currentUser.guid,  event);
    this.appointments$ = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid, 0, this.appointmentsCount);
  }

  async ngOnInit() {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.appointmentsCount = await this.appointmentService.getAllUpcomingDoctorAppointmentsCount(this.currentUser.guid);
    this.appointments$ = this.appointmentService.getAllUpcomingDoctorAppointments(this.currentUser.guid, 0, this.appointmentsCount);
  }
}
