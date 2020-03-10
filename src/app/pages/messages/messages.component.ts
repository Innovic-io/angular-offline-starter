import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {EmployeeModel} from '../../models/employee.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }

}
