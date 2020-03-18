import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';
import { ContactModel, EmergencyModel, EmployeeModel } from '../models/employee.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentUser = {...doctor};
  private readonly employee$: BehaviorSubject<EmployeeModel>;

  constructor() {
    this.employee$ = new BehaviorSubject<EmployeeModel>(this.currentUser);
  }

  getLoggedEmployee() {
    return this.currentUser;
  }

  getLoggedEmployee$() {
    return this.employee$.asObservable();
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
    this.employee$.next(this.currentUser);
  }

  updateEmployeeAvatar(avatarURL: string) {
    this.currentUser = { ...this.currentUser, avatar: avatarURL};
    this.employee$.next(this.currentUser);
  }
}
