import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public db: any;

  constructor() {
    this.db = new Dexie('employee_database');
    this.db.version(1).stores({
      employees: 'guid,firstName,lastName,email,password',
      appointments: 'guid,firstName,lastName,date,notes,phone,email'
    });
  }

 async insertEmployeeInTable() {
    this.db.employees.put({
      guid: '55018aa9-930d-4cf9-ac64-dcf290829029', firstName: 'Kristina', lastName: 'Ilic', email: 'b@gmail.com', password: 'kristinailic'
    })
      .then(() => {
        return this.db.employees.get('55018aa9-930d-4cf9-ac64-dcf290829029');

      }).then((employee) => {
   //   alert('employee name: ' + employee.firstName);

    }).catch((error) => {
      alert('Ooops: ' + error);
    });
  }

  async insert<T>(tableName: string, object: T) {
    await this.db[tableName].put(object);
  }

  async getSingle<T>(tableName: string, guid: string) {
   return await this.db[tableName].get(guid);
  }

  async getUserByEmailAndPassword<T>(tableName: string, email: string, password: string) {
    const emailEqual = await this.db[tableName].where('email').equals(email).first();
    const passwordEqual = await this.db[tableName].where('password').equals(password).first();
    if (emailEqual !== undefined || passwordEqual !== undefined) {
      return null;
    } else {
      return undefined;
    }
  }

  async deleteAppointment<T>(tableName: string, guid: string) {
    await this.db[tableName].delete(guid);
  }

  async updateEmployee<T>(tableName: string, guid: string, object: T) {
    await this.db[tableName].update(guid, object);
  }

  async insertAppointment<T>(tableName: string, object: T) {
    await this.db[tableName].put(object);
  }

}
