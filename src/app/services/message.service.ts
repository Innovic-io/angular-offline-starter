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
    const lastMessage = [];
    const conver = [{
      date: '',
      guid: '',
      urgent: false,
      archive: false,
      doctorEmail: '',
      recipient: '',
      subject: '',
      doctorMessage: '',
      dis: [{
        date: '',
        guid: '',
        urgent: false,
        archive: false,
        doctorEmail: '',
        recipient: '',
        subject: '',
        doctorMessage: '',
      }]
    }];
    const doctorMessages = this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
    const allOther = this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
    lastMessage.push(doctorMessages.reduce((a, b) => (a.date > b.date ? a : b)));
    console.log('last', lastMessage);
    const indexOfLastMessage = doctorMessages.indexOf(lastMessage[0]);
    console.log(indexOfLastMessage);
    allOther.splice(indexOfLastMessage, 1);
    console.log('all other', allOther);
    lastMessage.push(allOther);
    console.log(lastMessage);

    return doctorMessages;
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
