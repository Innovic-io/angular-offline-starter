import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';
import { ContactModel, EmergencyModel, EmployeeModel } from '../models/employee.model';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentUser = {...doctor};
  private employeeObserver: Subscriber<EmployeeModel>;
  private readonly employee$: Observable<EmployeeModel>;


  constructor() {
    this.employee$ = new Observable<EmployeeModel>((observer) => {
    this.employeeObserver = observer;
  });
  }

  getLoggedEmployee() {
    return this.currentUser;
  }

  getObservableEmployee() {
    return this.employee$;
  }

  nextEmployee(nextEmployee: EmployeeModel) {
    this.employeeObserver.next(nextEmployee);
  }

  updateEmployee(employee: EmployeeModel | ContactModel | EmergencyModel, type: string) {
    switch (type) {
      case 'basic':
        this.currentUser = {...this.currentUser, ...employee};
        break;
      case 'contact':
        this.currentUser.contact = {...this.currentUser.contact, ...employee};
        break;
      case 'emergency':
        this.currentUser.emergencyPerson = {...this.currentUser.emergencyPerson, ...employee};
        break;
    }
    return this.currentUser;
  }

  updateEmployeeAvatar(avatarURL: string) {
    this.currentUser = { ...this.currentUser, avatar: avatarURL};
    return this.currentUser;
  }
}
