import { Injectable } from '@angular/core';

import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: MessageModel[] = [];
  private conversation: MessageModel[] = [];

  createMessage(message: MessageModel) {
    console.log(message);
    this.messages.push(message);
    console.log(this.messages);
  }
  createConversation(message: MessageModel) {
    const messageIndex = this.messages.findIndex(mess => mess.guid === message.guid);
    console.log(messageIndex);
    if (messageIndex === 0) {
      this.conversation.push(message);
    }
    if (message.replyTo !== undefined) {
      this.conversation.push(message);
    }
    console.log('Conversation', this.conversation);
    // messageIndex = 0;
  }
  getLastEmailInConversation(doctorGUID: string, messageGUID: string ) {
    const messageIndex = this.conversation.findIndex(message => message.guid === messageGUID);
    if (messageIndex === 0) {
      {
        return this.conversation.filter(message => message.doctorEmail.guid === doctorGUID);
      }
    }

  }
  getAllDoctorEmails(doctorGUID: string) {
    return this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
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
