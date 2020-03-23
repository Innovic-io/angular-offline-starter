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
      employees: 'guid,avatar,name,middleName,lastName,contact,password,gender,dateOfBirth,role',
      appointments: 'guid,firstName,lastName,date,notes,phone,email'
    });
  }

  async insert<T>(tableName: string, object: T) {
    await this.db[tableName].put(object);
  }

  async getSingle<T>(tableName: string, guid: string) {
    return await this.db[tableName].get(guid);
  }

  async getUserByEmailAndPassword<T>(tableName: string, email: string, password: string) {
    // const emailEqual = await this.db[tableName].where('contact.email').equals(email).first();
   //  console.log(emailEqual);
    const passwordEqual = await this.db[tableName].where('password').equals(password).first();
  //  const valid = await this.db[tableName].where({'contact.email': email, 'password': password}).first();
    if (passwordEqual !== undefined) {
      return passwordEqual;
    } else {
      return undefined;
    }
  }

  async delete<T>(tableName: string, guid: string) {
    await this.db[tableName].delete(guid);
  }

  async update<T>(tableName: string, guid: string, object: T) {
    await this.db[tableName].update(guid, object);
  }

  async getAll<T>(tableName: string) {
    return this.db[tableName].toArray();
  }

  async getAllPastAppointments<T>(tableName: string, now: Date, providerGUID) {
    return this.db[tableName].where('date').below(now).toArray();
  }

}
