import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { doctor } from '../../data/dummy';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-profile-basic-info',
  templateUrl: './profile-basic-info.component.html',
  styleUrls: ['./profile-basic-info.component.css']
})
export class ProfileBasicInfoComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleName: string;
  @Input() gender: string;
  genders = ['female', 'male'];
  employeeModel: EmployeeModel;

  constructor(private employee: EmployeeService) {}
  onSubmit(form: NgForm) {
    console.log(this.employeeModel);
    if (form.valid) {
      this.employee.updateEmployee(this.firstName);
      console.log(doctor);
    }
  }
  get diagnostic() { return JSON.stringify(this.employee.getLoggedEmployee()); }

}
