import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { EmployeeModel } from './models/employee.model';
import { EmployeeService } from './services/employee.service';
import { SystemService } from './services/system.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

moment.locale('sr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  systemMessage$: Observable<string>;
  systemMessageDanger$: Observable<string>;
  currentUser$: Observable<EmployeeModel>;
  title: string;

  constructor(
    public employeeService: EmployeeService,
    public systemService: SystemService,
    public router: Router) {
  }

  ngOnInit() {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
    this.systemMessage$ = this.systemService.getMessage();
    this.systemMessageDanger$ = this.systemService.getDangerMessage();
  }

  logOut() {
    this.employeeService.logOut();
    this.router.navigateByUrl('/login');
  }

}
