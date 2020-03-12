import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-profile-basic-info',
  templateUrl: './profile-basic-info.component.html',
  styleUrls: ['./profile-basic-info.component.css']
})
export class ProfileBasicInfoComponent {
  @Input() user: EmployeeModel;
  @Output() update = new EventEmitter<EmployeeModel>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
      alert('Profile is updated!');
    }
  }
}
