import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ContactModel, EmployeeModel } from '../../models/employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {
  @Input() user: EmployeeModel;
  @Output() update = new EventEmitter<EmployeeModel>();
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
    }
  }
}
