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
      appointments: 'guid,firstName,lastName,date,provider,notes,phone,email',
      messages: 'guid,date,doctorEmail,recipient,subject,doctorMessage,urgent,archive,replyTo,conversation'

    });
  }

  async insert<T>(tableName: string, object: T) {
    await this.db[tableName].put(object);
  }

  async getSingle<T>(tableName: string, guid: string) {
    return await this.db[tableName].get(guid);
  }

  async getUserByEmailAndPassword<T>(tableName: string, email: string, password: string) {
    // console.log( await this.db[tableName].where({'contact.email': email, password}).first());
    return await this.db[tableName].where({'contact.email': email, password}).first();
  }

  async delete<T>(tableName: string, guid: string) {
    await this.db[tableName].delete(guid);
  }

  async update<T>(tableName: string, guid: string, object: T) {
    await this.db[tableName].update(guid, object);
  }
  async getAllDoctorEmails<T>(tableName: string, guid: string) {
    // console.log(await this.db[tableName].where('doctorEmail.guid').equals(guid).get());
    return this.db[tableName].where('doctorEmail.guid').equals(guid).toArray();
  }
  async getAll<T>(tableName: string) {
    return this.db[tableName].toArray();
  }

  async getAllPast<T>(tableName: string, now: Date, providerGUID) {
    return this.db[tableName].where('date').below(now).toArray();
    // return this.db[tableName].where('provider.guid').equals(providerGUID);
  }

  async getAllUpcoming<T>(tableName: string, now: Date, providerGUID) {
    return this.db[tableName].where('date').above(now).toArray();
    // return this.db[tableName].where('provider.guid').equals(providerGUID);
  }


}
