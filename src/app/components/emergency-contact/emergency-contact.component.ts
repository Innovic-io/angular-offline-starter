import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { NgForm } from '@angular/forms';
import { enumSelector, Relationship } from '../../models/system.models';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent {
   @Input() user: EmployeeModel;
   @Output() update = new EventEmitter<EmployeeModel>();
   relationships = enumSelector(Relationship);
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
      alert('Profile is updated!');
    }
  }
}
