import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../../../services/message.service';
import { MessageModel } from '../../../models/message.model';
import { EmployeeService } from '../../../services/employee.service';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: [ './new-message.component.css' ]
})
export class NewMessageComponent implements OnInit {
  message: MessageModel;
  minLengthTextArea = 10;
  messages: MessageModel[];

  constructor(
    private systemService: SystemService,
    private messageService: MessageService,
    private employee: EmployeeService,
    private route: ActivatedRoute) {
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      await this.messageService.createMessage(this.message);
      this.message = new MessageModel();

      form.reset();
      form.controls.urgent.setValue(false);
      form.controls.doctorEmail.setValue(this.employee.getLoggedEmployee());
      this.systemService.createAlertMessage('Message sent!');
    }
  }

  reset(form: NgForm) {

    form.reset();
    form.controls.urgent.setValue(false);
    form.controls.doctorEmail.setValue(this.employee.getLoggedEmployee());
  }

  async ngOnInit() {
    const { replayTo } = this.route.snapshot.queryParams;
    this.message = new MessageModel();
    this.message.doctorEmail = this.employee.getLoggedEmployee();
    if (replayTo) {
      const replayToMessage: MessageModel = await this.messageService.getMessage(replayTo);
      this.message.subject = 'RE: ' + replayToMessage.subject;
      this.message.recipient = replayToMessage.recipient;
      this.message.replyTo = replayTo;
    }
  }
}
