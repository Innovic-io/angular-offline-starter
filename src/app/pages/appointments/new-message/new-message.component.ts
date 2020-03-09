import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor(private router: Router) { }


  cancel() {
    this.backOnDashboard();
  }

  backOnDashboard() {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit(): void {
  }

}
