import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  constructor(private messageService: MessageService, private employee: EmployeeService, private router: Router) {
  }
  countCharacters(input) {
    const counter: HTMLElement = document.getElementById('counter');
    const textareaMin = document.getElementById('textArea').getAttribute('minlength');

    if (input?.target?.value?.length < 10) {
      counter.style.color = 'red';
      counter.innerHTML = (Number(textareaMin) - input?.target?.value?.length).toString();
    } else {
      counter.style.color = 'green';
      counter.innerHTML = (input?.target?.value?.length - Number(textareaMin)).toString();
    }

  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.messageService.createMessage(this.message);
      this.message = new MessageModel();
      alert('Message is sent!');
      form.reset();
      document.getElementById('counter').innerHTML = '';
      form.controls.doctorEmail.setValue(this.employee.getLoggedEmployee());
    }
  }

  reset(form: NgForm) {

    form.reset();
    document.getElementById('counter').innerHTML = '';
    form.controls.doctorEmail.setValue(this.employee.getLoggedEmployee());
  }


  ngOnInit(): void {
    this.message = new MessageModel();
    this.message.doctorEmail = this.employee.getLoggedEmployee();

  }
}
