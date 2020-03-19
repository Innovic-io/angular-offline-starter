import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';
import { ContactModel, EmergencyModel, EmployeeModel } from '../models/employee.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { RegisterModel } from '../models/register.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: EmployeeModel[] = [];
  private currentUser: EmployeeModel;
  private readonly employee$: BehaviorSubject<EmployeeModel>;

  constructor() {
    this.employee$ = new BehaviorSubject<EmployeeModel>(null);
  }

  getLoggedEmployee() {
    return this.currentUser;
  }

  getLoggedEmployee$() {
    return this.employee$.asObservable();
  }

  signIn(email: string, password: string): boolean {
    const user = this.employees.find(element => element.contact.email === email && element.password === password);
    if (user !== undefined) {
      this.currentUser = user;
      this.employee$.next(this.currentUser);
      return true;
    } else {
      return false;
    }
  }

  register(register: RegisterModel): boolean {
    const employee = new EmployeeModel();
    const user = this.employees.find(element => element.contact.email === register.email && element.password === register.password);
    if (user === undefined) {
      employee.password = register.password;
      employee.name = register.name;
      employee.lastName = register.lastName;
      employee.contact.email = register.email;
      this.employees.push(employee);
      return true;
    } else {
      return false;
    }
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
