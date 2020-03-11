import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getLoggedEmployee() {
    return doctor;
  }

  updateEmployee(employee: string) {
    // this.doctor.items[newitem.id].name = newitem.name
      doctor.name = employee;
      return doctor;
  }
}
