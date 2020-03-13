import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.css']
})
export class MyDocumentsComponent implements OnInit {
  currentUser: EmployeeModel;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
  }

}
