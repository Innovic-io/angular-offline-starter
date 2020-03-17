import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { EmployeeModel } from './models/employee.model';
import { EmployeeService } from './services/employee.service';
import { SystemService } from './services/system.service';
import { Observable } from 'rxjs';

moment.locale('sr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: EmployeeModel;
  systemMessage$: Observable<string>;
  employee$: Observable<EmployeeModel>;

  constructor(public employeeService: EmployeeService, public systemService: SystemService) {
  }

  ngOnInit(): void {
    this.employee$ = this.employeeService.getObservableEmployee();
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.systemMessage$ = this.systemService.getMessage();
  }
}
