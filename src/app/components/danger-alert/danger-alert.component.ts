import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-alert',
  templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.css']
})
export class DangerAlertComponent {
  @Input() title: string;

}
