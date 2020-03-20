import { Injectable } from '@angular/core';

import { doctor } from '../data/dummy';
import { ContactModel, EmergencyModel, EmployeeModel } from '../models/employee.model';
import { BehaviorSubject } from 'rxjs';
import { RegisterModel } from '../models/register.model';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: EmployeeModel[] = [];
  private currentUser: EmployeeModel;
  private readonly employee$: BehaviorSubject<EmployeeModel>;

  constructor(public databaseService: DatabaseService) {
    this.employee$ = new BehaviorSubject<EmployeeModel>(null);
  }

  getLoggedEmployee() {
    return this.currentUser;
  }

  getLoggedEmployee$() {
    return this.employee$.asObservable();
  }

  async signIn(email: string, password: string) {
    const user = await this.databaseService.getUserByEmailAndPassword<EmployeeModel>('employees', email, password);
    if (user !== undefined) {
      this.currentUser = user;
      console.log(this.currentUser);
      this.employee$.next(this.currentUser); // change getUserByEmailAndPassword to return user not null
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

 async register(register: RegisterModel) {
    const user = await this.databaseService.getUserByEmailAndPassword<EmployeeModel>('employees', register.email, register.password);
    console.log(user);
    if (user === undefined) {
      const employee = new EmployeeModel();
      employee.password = register.password;
      employee.name = register.name;
      employee.lastName = register.lastName;
      employee.contact.email = register.email;

      await this.databaseService.insert<EmployeeModel>('employees', employee);

      return true;
    }
    return false;
  }

  getAllEmployees() {
    return this.employees;
  }

  updateEmployee(employee: EmployeeModel | ContactModel | EmergencyModel, type: string) {
    const index = this.employees.indexOf(this.currentUser);
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
    this.employees.splice(index, 1, this.currentUser);
    this.employee$.next(this.currentUser);
  }

  updateEmployeeAvatar(avatarURL: string) {
    const index = this.employees.indexOf(this.currentUser);
    this.currentUser = { ...this.currentUser, avatar: avatarURL};
    this.employees.splice(index, 1, this.currentUser);
    this.employee$.next(this.currentUser);
  }
}
