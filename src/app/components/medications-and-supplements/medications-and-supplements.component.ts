import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-medications-and-supplements',
  templateUrl: './medications-and-supplements.component.html',
  styleUrls: ['./medications-and-supplements.component.css']
})
export class MedicationsAndSupplementsComponent implements OnInit {
  @Input() user: EmployeeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
