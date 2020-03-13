import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../../../services/message.service';
import { MessageModel } from '../../../models/message.model';
import { EmployeeService } from '../../../services/employee.service';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message: MessageModel;
  minLengthTextArea = 10;

  constructor(
    private systemService: SystemService,
    private messageService: MessageService,
    private employee: EmployeeService,
    private router: Router) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.messageService.createMessage(this.message);
      this.message = new MessageModel();

      form.reset();
      form.controls.urgent.setValue(false);

      document.getElementById('counter').innerHTML = '';
      form.controls.doctorEmail.setValue(this.employee.getLoggedEmployee());
      this.systemService.createAlertMessage('Message sent!');
    }
  }

  reset(form: NgForm) {

    form.reset();
    form.controls.urgent.setValue(false);
    form.controls.doctorEmail.setValue(this.employee.getLoggedEmployee());
  }


  ngOnInit(): void {
    this.message = new MessageModel();
    this.message.doctorEmail = this.employee.getLoggedEmployee();

  }
}
