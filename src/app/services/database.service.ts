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
      appointments: 'guid,firstName,lastName,date,provider,notes,phone,email,confirmed',
      messages: 'guid,date,doctorEmail,recipient,subject,doctorMessage,urgent,archive,replyTo,conversation'

    });
  }

  async insert<T>(tableName: string, object: T) {
    await this.db[tableName].put(object);
  }

  async getSingle<T>(tableName: string, guid: string) {
    return await this.db[tableName].get(guid);
  }

  async getMultiple<T>(tableName: string, start: number, end: number) {
    console.log( await this.db[tableName].orderBy('date').reverse().offset(start).limit(end).toArray());
    return this.db[tableName].orderBy('date').reverse().offset(start).limit(end).toArray();
  }

  async getUserByEmailAndPassword<T>(tableName: string, email: string, password: string) {
    return await this.db[tableName].where({'contact.email': email, password}).first();
  }

  async delete<T>(tableName: string, guid: string) {
    await this.db[tableName].delete(guid);
  }

  async updateArchive<T>(tableName: string, guid: string, archive: boolean) {
    await this.db[tableName].update(guid, {archive});
  }

  async update<T>(tableName: string, guid: string, object: T) {
    await this.db[tableName].update(guid, object);
  }

  async getAllDoctorEmails<T>(tableName: string, doctorGuid: string) {
    console.log( this.db[tableName].where('doctorEmail.guid').equals(doctorGuid).toArray());
    console.log(this.db[tableName].where({'doctorEmail.guid': doctorGuid}));
    return  this.db[tableName].where({'doctorEmail.guid': doctorGuid});
  }

  async getAll<T>(tableName: string) {
    return this.db[tableName].toArray();
  }

  async getAllPast<T>(tableName: string, now: Date, providerGUID) {
    return this.db[tableName].where('date').below(now).toArray();
    // return this.db[tableName].where('provider.guid').equals(providerGUID);
  }

  async getAllUpcoming<T>(tableName: string, now: Date, providerGUID) {
    return this.db[tableName].where('date').above(now).and(() => 'provider.guid' === providerGUID).toArray();
    // return this.db[tableName].where('provider.guid').equals(providerGUID);
  }

  async updateConfirmed<T>(tableName: string, guid: string, confirmed: boolean) {
    await this.db[tableName].update(guid, {confirmed});
  }


}
