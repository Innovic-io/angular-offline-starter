import { Component, Input, OnInit } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  @Input() user: EmployeeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
