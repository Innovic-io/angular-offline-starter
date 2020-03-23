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
              public databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.systemMessage$ = this.systemService.getMessage();
    this.systemMessageDanger$ = this.systemService.getDangerMessage();
    for (const message of generateMessages(14)) {
      this.messageService.createMessage(message);
    }
    // for (const app of generateUppcomingAppointments(25)) {
    //   this.appointmentService.createAppointment(app);
    // }
    // for (const app of generatePastAppointments(20)) {
    //   this.appointmentService.createAppointment(app);
    // }
  }
}
