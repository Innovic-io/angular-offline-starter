import { Injectable } from '@angular/core';

import { MessageModel } from '../models/message.model';
import { DatabaseService } from './database.service';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public databaseService: DatabaseService,
              public systemService: SystemService) {}

  async createMessage(message: MessageModel) {
    await this.databaseService.insert<MessageModel>('messages', message);
  }

  async getAllDoctorEmails(doctorGUID: string): Promise<MessageModel[]> {
    const doctorMessages = await this.databaseService.getAll<MessageModel[]>('messages');
    const lastMessages = [];

    for (const message of doctorMessages) {
      if (!message.replyTo) {
        message.conversation = [];
        message.conversation.push(message);
        let guid = message.guid;
        let replayed;
        do {
          replayed = doctorMessages.find(dm => dm.replyTo === guid);
          if (replayed) {
            message.conversation.push(replayed);
            guid = replayed.guid;
          }
        } while (replayed);
        lastMessages.push(this.replaceLastWithFirst(message));
      //  console.log(message.conversation);
      }
    }
    return lastMessages;
  }

  private replaceLastWithFirst(message: MessageModel) {
    const last = message.conversation.pop();
    return Object.assign({}, message, last, {
      conversation: message.conversation
    });
  }

  async updateArchive(messageGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      this.systemService.createAlertMessage('Message is archived!');
      return await this.databaseService.updateArchive('messages', messageGUID, true);
    }
    this.systemService.createDangerAlertMessage('Message is not archived!');
  }

  async deleteMessage(messageGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      const doctorMessages = await this.databaseService.getAll<MessageModel[]>('messages');
      const messageIndex = doctorMessages.findIndex(message => message.guid === messageGUID);
      console.log(doctorMessages.findIndex(message => message.guid === messageGUID));

      for (const mes of doctorMessages) {
        console.log(mes.conversation);
    //   const mesIndexConversation = mes.conversation.findIndex(message => message.guid === messageGUID);
      }
      console.log(messageIndex);
      if (messageIndex === 0) {
        await this.databaseService.delete('messages', messageGUID);
        doctorMessages[messageIndex].replyTo = null;
      }
      if (messageIndex > 0) {
        await this.databaseService.delete('messages', messageGUID);
        if (doctorMessages[messageIndex]) {
          doctorMessages[messageIndex].replyTo = doctorMessages[messageIndex - 1].guid;
        }
      }
      this.systemService.createAlertMessage('Message is deleted!');
      return doctorMessages;
    }
    this.systemService.createDangerAlertMessage('Message is not deleted!');

  }

  async getMessage(messageGUID: string) {
    return await this.databaseService.getSingle('messages', messageGUID);
  }


}
