import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: [ './inbox.component.css' ]
})
export class InboxComponent {
  @Input() messages: MessageModel[];
  @Input() searchText: string;
  @Output() updateAchieveIC = new EventEmitter<string>();
  @Output() deleteMessageIC = new EventEmitter<string>();
  @Output() textToSearch = new EventEmitter<string>();
  @Output() replyOnEmail = new EventEmitter<string>();
  @Output() convertToPDFIC = new EventEmitter<HTMLDivElement>();

  deleteIC(event) {
    this.deleteMessageIC.emit(event);
  }

  updateIC(event) {
    this.updateAchieveIC.emit(event);
  }

  onSearch(event) {
    this.searchText = event;
  }

  convertIC(event) {
    this.convertToPDFIC.emit(event);
  }

}
