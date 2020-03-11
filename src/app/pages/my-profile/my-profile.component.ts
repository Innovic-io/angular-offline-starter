import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  currentUser: EmployeeModel;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    console.log(this.currentUser);
  }

}
