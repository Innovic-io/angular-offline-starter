import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { EmployeeModel } from './models/employee.model';
import { EmployeeService } from './services/employee.service';
import { SystemService } from './services/system.service';
import { Observable } from 'rxjs';
import { generateMessages, generatePastAppointments, generateUppcomingAppointments } from './data/appointment';
import { MessageService } from './services/message.service';
import { AppointmentService } from './services/appointment.service';
import { DatabaseService } from './services/database.service';
import { Router } from '@angular/router';

moment.locale('sr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  systemMessage$: Observable<string>;
  systemMessageDanger$: Observable<string>;
  currentUser$: Observable<EmployeeModel>;
  title: string;

  constructor(
    public employeeService: EmployeeService,
    public systemService: SystemService,
    public messageService: MessageService,
    public appointmentService: AppointmentService,
    public databaseService: DatabaseService,
    private router: Router) {
  }

  async ngOnInit() {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.systemMessage$ = this.systemService.getMessage();
    this.systemMessageDanger$ = this.systemService.getDangerMessage();
    // for (const message of generateMessages(14)) {
    //   this.messageService.createMessage(message);
    // }
    // for (const app of generateUppcomingAppointments(20)) {
    //   this.appointmentService.createAppointment(app);
    // }
    // for (const app of generatePastAppointments(1)) {
    //   this.appointmentService.createAppointment(app);
    // }
  }

  logOut() {
    this.employeeService.logOut();
    window.location.reload();
  }

}
