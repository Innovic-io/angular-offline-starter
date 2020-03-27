import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeModel } from '../../models/employee.model';
import { enumSelector, Relationship } from '../../models/system.models';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: [ './emergency-contact.component.css' ]
})
export class EmergencyContactComponent {
  relationships = enumSelector(Relationship);
  @Input() user: EmployeeModel;
  @Output() update = new EventEmitter<EmployeeModel>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
    }
  }
}
