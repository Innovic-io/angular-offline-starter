import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../models/employee.model';
import { MessageModel } from '../../models/message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: MessageModel[];
  currentUser: EmployeeModel;

  constructor(private employeeService: EmployeeService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.messages = this.messageService.getAllDoctorEmails(this.currentUser.guid);
  }

}
