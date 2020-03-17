import { Injectable } from '@angular/core';

import { MessageModel } from '../models/message.model';
import { doctor } from '../data/dummy';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: MessageModel[] = [];
  private conversation: MessageModel[] = [];

  createMessage(message: MessageModel) {
    this.messages.push(message);
  }

  getAllDoctorEmails(doctorGUID: string) {
    const doctorMessages = this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
    console.log(doctorMessages);
    const conversation = [];
    const lastMessages = [];

    for (const message of this.messages) {
      if (message.replyTo == null ) {
        console.log('first', message);
      }
    }
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].replyTo == null && this.messages[i + 1].replyTo !== this.messages[i].guid) {
        lastMessages.push(this.messages[i]);
      }
    }
    for (let i = 0; i < this.messages.length - 1; i++) {
      if (this.messages[i + 1].replyTo === this.messages[i].guid) {
        conversation.push(this.messages[i]);
        console.log(this.messages.length);
        lastMessages.push(this.messages[this.messages.length - 1]);
      }
    }
    const uniqueArrayOfLastMessages = [...new Set(lastMessages)];
    console.log('last ', uniqueArrayOfLastMessages);
    console.log('conversation', conversation);

    return uniqueArrayOfLastMessages;
  }

  updateArchive(messageGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      return this.messages.find(message => message.guid === messageGUID).archive = true;
    }
  }

  deleteMessage(messageGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      const messageIndex = this.messages.findIndex(message => message.guid === messageGUID);
      console.log(messageIndex);
      if (messageIndex > -1) {
        this.messages.splice(messageIndex, 1);
      }
      return this.messages;
    }
  }

  getEmail(messageGUID: string) {
    return this.messages.find(message => message.guid === messageGUID);
  }


}
