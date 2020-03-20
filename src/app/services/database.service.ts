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
      employees: 'guid,firstName,lastName,email,password'
    });
  }

 async insertEmployeeInTable() {
    this.db.employees.put({
      guid: '55018aa9-930d-4cf9-ac64-dcf290829029', firstName: 'Kristina', lastName: 'Ilic', email: 'b@gmail.com', password: 'kristinailic'
    })
      .then(() => {
        return this.db.employees.get('55018aa9-930d-4cf9-ac64-dcf290829029');

      }).then((employee) => {
      alert('employee name: ' + employee.firstName);

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
  }

}
