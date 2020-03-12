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
  message = MessageModel;
  currentUser: EmployeeModel;
  search: string;

  constructor(private employeeService: EmployeeService, public messageService: MessageService) {
  }

  update($event) {
    if ($event) {
      console.log(this.messages);
      return this.messageService.updateArchive($event);
    }
  }

  delete($event) {
    if ($event) {
      console.log($event);
      this.messageService.deleteMessage($event);
      this.messages = this.messageService.getAllDoctorEmails(this.currentUser.guid);
    }
  }

  ngOnInit(): void {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.messages = this.messageService.getAllDoctorEmails(this.currentUser.guid);
  }

  onSearch(event) {
    this.search = event;
    console.log(event);
  }
}

