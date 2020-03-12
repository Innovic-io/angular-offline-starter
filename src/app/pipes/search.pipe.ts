import { Pipe, PipeTransform } from '@angular/core';
import { MessageModel } from '../models/message.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: MessageModel[], searchText: string): MessageModel[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item => {
      const subject = item.subject.toLowerCase().includes(searchText.toLowerCase());
      const doctorName = item.doctorEmail.name.toLowerCase().includes(searchText.toLowerCase());
      const recipient = item.recipient.toLowerCase().includes(searchText.toLowerCase());
      const message = item.doctorMessage.toLowerCase().includes(searchText.toLowerCase());
      const dateString = item.date.toString();
      const date = dateString.toLowerCase().includes(searchText.toLowerCase());
      if (subject) {
        return subject;
      }
      if (doctorName) {
        return doctorName;
      }
      if (recipient) {
        return  recipient;
      }
      if (message) {
        return message;
      }
      if (date) {
        return date;
      }
    });
  }
}

