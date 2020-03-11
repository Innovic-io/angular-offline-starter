import { Component, Input, OnInit } from '@angular/core';
import { MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  @Input() messages: MessageModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
