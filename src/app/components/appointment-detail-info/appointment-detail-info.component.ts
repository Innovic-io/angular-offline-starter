import { Component, Input, OnInit } from '@angular/core';
import { AppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-detail-info',
  templateUrl: './appointment-detail-info.component.html',
  styleUrls: ['./appointment-detail-info.component.css']
})
export class AppointmentDetailInfoComponent implements OnInit {
  @Input() appointment: AppointmentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
