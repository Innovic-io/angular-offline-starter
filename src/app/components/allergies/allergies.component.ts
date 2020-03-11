import { Component, Input } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent {
  @Input() user: EmployeeModel;
}
