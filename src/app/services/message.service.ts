import { Injectable } from '@angular/core';

import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: MessageModel[] = [];

  constructor() {
  }

  createMessage(message: MessageModel) {
    this.messages.push(message);
  }
  getAllDoctorEmails(doctorGUID: string) {
    return this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
  }
}
