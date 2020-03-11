import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {
  @Input() user: EmployeeModel;
  constructor() { }

  ngOnInit(): void {
  }

}
