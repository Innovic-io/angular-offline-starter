import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getLoggedEmployee() {
    return doctor;
  }
}
