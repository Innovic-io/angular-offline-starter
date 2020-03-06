import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from "../../models/employee.model";
import { doctor } from "../../data/dummy";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  currentUser: EmployeeModel;

  constructor(public employee: EmployeeService) { }

  ngOnInit(): void {
    this.currentUser = this.employee.getLoggedEmployee(doctor.guid);

  }

}
