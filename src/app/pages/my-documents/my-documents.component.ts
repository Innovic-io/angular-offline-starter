import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { generateAppointments } from '../../data/appointment';
import { PaginationService } from '../../services/pagination.service';
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
  markedAppointments: string[] = [];
  page: number;
  pager: any = {};
  pagedItems: AppointmentModel[];

  constructor(public employeeService: EmployeeService,
              public appointmentService: AppointmentService,
              public paginationService: PaginationService,
              public systemService: SystemService) { }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.currentUser$ = this.employeeService.getLoggedEmployee$();

    for (const app of generateAppointments(25)) {
      this.appointmentService.createAppointment(app);
    }
    this.pastAppointments = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
    this.setPage(1);
  }

  appointmentSelect(event: { checked: boolean, guid: string }) {
    if (event.checked) {
      this.markedAppointments.push(event.guid);
    } else {
      const guidIndex = this.markedAppointments.indexOf(event.guid);
      this.markedAppointments.splice(guidIndex, 1);
    }
  }

  pastAppointmentSelectAll(event) {
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
    this.systemService.createAlertMessage('Delete completed!');
    this.pastAppointments = this.appointmentService.getAllPastDoctorAppointments(this.currentUser.guid);
    this.setPage(1);
  }

  setPage($event) {
    this.page = $event;
    this.pagedItems = this.pastAppointments.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
