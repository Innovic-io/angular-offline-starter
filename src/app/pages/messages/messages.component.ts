import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../models/employee.model';
import { MessageModel } from '../../models/message.model';
import { MessageService } from '../../services/message.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: MessageModel[];
  message = MessageModel;
  currentUser: EmployeeModel;

  constructor(private employeeService: EmployeeService,
              public messageService: MessageService,
              public systemService: SystemService) {
  }

  async update($event) {
    if ($event) {
      await this.messageService.updateArchive($event);
      this.messages = await this.messageService.getAllDoctorEmails(this.currentUser.guid);
    }
  }

  async delete($event) {
    if ($event) {
      await this.messageService.deleteMessage($event);
      this.messages = await this.messageService.getAllDoctorEmails(this.currentUser.guid);
    }
  }

  async convert($event) {
    if ($event) {
      await this.systemService.exportAsPDF($event, $event.title);
    }
  }

  async ngOnInit() {
    this.currentUser = this.employeeService.getLoggedEmployee();
    this.messages = await this.messageService.getAllDoctorEmails(this.currentUser.guid);
  }

}

