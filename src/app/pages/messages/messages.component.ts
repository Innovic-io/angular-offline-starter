import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {EmployeeModel} from '../../models/employee.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  currentUserEmail: string;

  constructor(public employee: EmployeeService) {
  }
  ngOnInit(): void {
    this.currentUserEmail = this.employee.getLoggedEmployee().email;
    console.log(this.employee.getLoggedEmployee().email);
  }

}
