import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { EmployeeModel } from './models/employee.model';
import { EmployeeService } from './services/employee.service';
import { SystemService } from './services/system.service';

moment.locale('sr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: EmployeeModel;
  alertMessage = 'Successful!';

  constructor(public employeeService: EmployeeService, public systemService: SystemService) {
  }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.systemService.createAlertMessage(this.alertMessage);
  }

}

