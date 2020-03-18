import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { EmployeeModel } from './models/employee.model';
import { EmployeeService } from './services/employee.service';
import { SystemService } from './services/system.service';
import { Observable } from 'rxjs';
import { generateMessages } from './data/appointment';
import { MessageService } from './services/message.service';

moment.locale('sr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  systemMessage$: Observable<string>;
  currentUser$: Observable<EmployeeModel>;

  constructor(public employeeService: EmployeeService, public systemService: SystemService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.systemMessage$ = this.systemService.getMessage();
    for (const message of generateMessages(14)) {
      this.messageService.createMessage(message);
    }
  }
}
