import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {
  @Input() numberOfUpcomingAppointments = 2;
  @Input() date = "Aug 30";
  @Input() dateDifference = "Two days ago";
  @Input() appointment = "New Patient Appointment";
  @Input() provider = "Dr. Emily Jonson";

  constructor() { }

  ngOnInit(): void {
  }

}
