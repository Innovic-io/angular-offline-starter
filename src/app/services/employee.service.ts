import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentUser = {...doctor};

  constructor() { }

  getLoggedEmployee() {
    return this.currentUser;
  }

  updateEmployee(employee: EmployeeModel) {
      this.currentUser = employee;
      return this.currentUser;
  }
}
