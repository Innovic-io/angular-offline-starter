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
      if (subject) {
        return subject;
      }
    });
  }
}

