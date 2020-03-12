import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Output() resultInput = new EventEmitter<number>();
  user: EmployeeModel;
  firstNumber =  Math.floor(Math.random() * Math.floor(10));
  secondNumber = Math.floor(Math.random() * Math.floor(10));
  math = this.firstNumber.toString() + ' + ' + this.secondNumber.toString();
  result = this.firstNumber + this.secondNumber;
  submitDisabled = true;

constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  this.user = this.employeeService.getLoggedEmployee();
  }

  onChange(event) {
    // tslint:disable-next-line:radix
    const eventResult: number = parseInt(event.target.value);
    if (this.result === eventResult) {
      this.submitDisabled = false;
    }
    if (this.result !== eventResult) {
      this.submitDisabled = true;
    }
  }
}
