import { Injectable } from '@angular/core';

import { ContactModel, EmergencyModel, EmployeeModel } from '../models/employee.model';
import { BehaviorSubject } from 'rxjs';
import { RegisterModel } from '../models/register.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentUser: EmployeeModel;
  private readonly employee$: BehaviorSubject<EmployeeModel>;

  constructor(public databaseService: DatabaseService) {
    this.employee$ = new BehaviorSubject<EmployeeModel>(null);
  }

  getLoggedEmployee() {
    return this.currentUser;
  }

  async isUserAlreadyLoggedIn() {
    const loggedInUser = localStorage.getItem('user');

    if (!this.currentUser && loggedInUser) {
      const user = await this.databaseService.getSingle<EmployeeModel>('employees', loggedInUser);
      await this.signIn(user.contact.email, user.password);
    }

    return this.currentUser;
  }

  getLoggedEmployee$() {
    return this.employee$.asObservable();
  }

  logOut() {
    localStorage.removeItem('user');
  }

  async signIn(email: string, password: string) {
    const user = await this.databaseService.getUserByEmailAndPassword<EmployeeModel>('employees', email, password);

    if (user !== undefined) {
      this.currentUser = user;
      this.employee$.next(this.currentUser);
      return user;
    } else {
      return false;
    }
  }

  async register(register: RegisterModel): Promise<boolean> {
    const user = await this.databaseService.getUserByEmailAndPassword<EmployeeModel>('employees', register.email, register.password);

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

  getAllDoctors() {
    return this.databaseService.getAllDoctors('employees');
  }

  async updateEmployee(employee: EmployeeModel | ContactModel | EmergencyModel, type: string) {
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
    await this.databaseService.update<EmployeeModel>('employees', this.currentUser.guid, this.currentUser);
    this.employee$.next(this.currentUser);
  }

  async updateEmployeeAvatar(avatarURL: string) {
    this.currentUser = { ...this.currentUser, avatar: avatarURL};
    await this.databaseService.update<EmployeeModel>('employees', this.currentUser.guid, this.currentUser);
    this.employee$.next(this.currentUser);
  }
}
