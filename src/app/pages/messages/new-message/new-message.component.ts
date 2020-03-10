import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MessageService} from '../../../services/message.service';
import {MessageModel} from '../../../models/message.model';
import {doctor} from '../../../data/dummy';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message = new MessageModel();
  doctors = [doctor];
  @Input() doctorEmail1: string;

  constructor(private messageService: MessageService, private router: Router) {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.messageService.createMessage(this.message);
      this.message = new MessageModel();
      alert('Message is sent!');
    }
  }

  cancel() {
    this.backOnDashboard();
  }

  backOnDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }
}
