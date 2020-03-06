import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() name ="Anya";
  constructor() { }

  ngOnInit(): void {
  }

}
