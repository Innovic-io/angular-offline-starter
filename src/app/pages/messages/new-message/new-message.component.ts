import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../../../services/message.service';
import { MessageModel } from '../../../models/message.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message: MessageModel;
  currentLoggedEmail: string;

  constructor(private messageService: MessageService, private employee: EmployeeService, private router: Router) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.messageService.createMessage(this.message);
      this.message = new MessageModel();
      alert('Message is sent!');
      form.reset();
      form.controls.doctorEmail.setValue(this.currentLoggedEmail);
    }
  }

  cancel() {
    this.backOnDashboard();
  }

  backOnDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.message = new MessageModel();
    this.currentLoggedEmail = this.employee.getLoggedEmployee().email;
    this.message.doctorEmail = this.currentLoggedEmail;
  }
}
