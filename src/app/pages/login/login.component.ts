import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: EmployeeModel;

  constructor() { }

  onSubmit(form: NgForm) {
    if (form.valid) {
    }
  }

  ngOnInit(): void {
  }

}
