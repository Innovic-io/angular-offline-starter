import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public db: Dexie;

  constructor() {
    this.db = new Dexie('employee_database');
    this.db.version(1).stores({
      employees: 'guid,avatar,name,middleName,lastName,contact,password,gender,dateOfBirth,role',
      appointments: 'guid,firstName,lastName,date,provider,notes,phone,email,confirmed',
      messages: 'guid,date,doctorEmail,recipient,subject,doctorMessage,urgent,archive,replyTo,conversation',
      files: '[parentDir+name],parentDir'
    });
  }

  async createDir(tableName: string, parentDir: string, name: string) {
    return this.db[tableName].add({parentDir, name, type: 'dir'});
  }
  createFile(tableName: string, parentDir, filename, blob) {
    return this.db.transaction('rw', this.db[tableName], async () => {
      const dir = await this.db[tableName].get({
        parentDir
      });
      if (!dir) { throw new Error('Parent dir not found'); }
      if (dir.type !== 'dir') { throw new Error('Parent is not a dir'); }
      await this.db[tableName].add({
        type: 'file',
        name: filename,
        parentDir,
        blob
      });
    });
  }
  listDirectory(tableName: string, dirPath) {
    return this.db[tableName]
      .where({parentDir: dirPath})
      .toArray();
  }


  async insert<T>(tableName: string, object: T) {
    return this.db[tableName].put(object);
  }

  async getSingle<T>(tableName: string, guid: string) {
    return this.db[tableName].get(guid) as T;
  }

  async getSingleByReplyTo<T>(tableName: string, replyTo: string) {
    return this.db[tableName].where({ replyTo }).first();
  }

  async updateReplyTo<T>(tableName: string, guid: string, replyTo: string) {
    return this.db[tableName].update(guid, { replyTo });
  }

  async getUserByEmailAndPassword<T>(tableName: string, email: string, password: string) {
    return this.db[tableName].where({ 'contact.email': email, password }).first();
  }

  async delete<T>(tableName: string, guid: string) {
    return this.db[tableName].delete(guid);
  }

  async updateArchive<T>(tableName: string, guid: string, archive: boolean) {
    return this.db[tableName].update(guid, { archive });
  }

  async update<T>(tableName: string, guid: string, object: T) {
    return this.db[tableName].update(guid, object);
  }

  async getAllDoctorEmails<T>(tableName: string, doctorGuid: string) {
    return this.db[tableName].where({ 'doctorEmail.guid': doctorGuid }).toArray();
  }

  async getAll<T>(tableName: string) {
    return this.db[tableName].toArray();
  }

  async getAllPast<T>(tableName: string, now: Date, providerGUID: string, start = 0, end = 10) {
    return this.db[tableName].where('date').below(now).filter(appointment =>
      appointment.provider.guid === providerGUID).offset(start * end).limit(end).toArray();
  }

  async getAllPastCount<T>(tableName: string, now: Date, providerGUID: string) {
    return this.db[tableName].where('date').below(now).filter(appointment =>
      appointment.provider.guid === providerGUID).count();
  }

  async getAllUpcoming<T>(tableName: string, now: Date, providerGUID: string, start = 0, end = 10) {
    return this.db[tableName].where('date').above(now).filter(appointment =>
      appointment.provider.guid === providerGUID).offset(start * end).limit(end).toArray();
  }

  async getAllUpcomingCount<T>(tableName: string, now: Date, providerGUID: string) {
    return this.db[tableName].where('date').above(now).filter(appointment =>
      appointment.provider.guid === providerGUID).count();
  }

  async updateConfirmed<T>(tableName: string, guid: string, confirmed: boolean) {
    return this.db[tableName].update(guid, { confirmed });
  }
}
