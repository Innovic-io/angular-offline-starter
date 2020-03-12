import { Injectable } from '@angular/core';

import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: MessageModel[] = [];

  createMessage(message: MessageModel) {
    this.messages.push(message);
  }
  getAllDoctorEmails(doctorGUID: string) {
    return this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
  }
  updateArchive(messageGUID: string) {
    return this.messages.find(message => message.guid === messageGUID).archive = true;
  }
  deleteMessage(messageGUID: string) {
    const messageIndex = this.messages.findIndex(message => message.guid === messageGUID);
    if (messageIndex > -1) {
      this.messages.splice(messageIndex, 1);
    }
    return this.messages;
  }

}
