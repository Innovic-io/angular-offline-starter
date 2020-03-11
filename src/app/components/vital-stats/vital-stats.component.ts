import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-vital-stats',
  templateUrl: './vital-stats.component.html',
  styleUrls: ['./vital-stats.component.css']
})
export class VitalStatsComponent implements OnInit {
  @Input() user: EmployeeModel;
  constructor() { }

  ngOnInit(): void {
  }

}
