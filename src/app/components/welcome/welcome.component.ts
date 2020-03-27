import { Component, Input } from '@angular/core';

import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
  @Input() user: EmployeeModel;
}
