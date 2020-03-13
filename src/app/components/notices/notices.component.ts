import { Component, OnInit } from '@angular/core';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  public faFileAlt = faFileAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
