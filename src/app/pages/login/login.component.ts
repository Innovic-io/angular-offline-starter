import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';
import { RegisterModel } from '../../models/register.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerEmployee = new RegisterModel();
  path: string;

  constructor(private employeeService: EmployeeService) { }

  onSubmit(form: NgForm, email, password) {
    if (form.valid) {
      this.employeeService.signIn(email, password);
      this.path = '/dashboard';
    }
  }

  ngOnInit(): void {

  }

}
