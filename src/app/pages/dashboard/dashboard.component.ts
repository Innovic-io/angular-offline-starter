import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: EmployeeModel;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = new EmployeeModel();
    this.currentUser.name = 'Aya';
  }

}
