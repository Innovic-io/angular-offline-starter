import { Component, OnInit } from '@angular/core';
import { ContactModel, EmergencyModel, EmployeeModel } from '../../models/employee.model';
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
  }

  onUpdateEmployee(employee: EmployeeModel | ContactModel | EmergencyModel, type: string) {
    this.currentUser = this.employeeService.updateEmployee(employee, type);
}

}
