import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AppointmentModel} from "../../models/appointment.model";

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {
  @Input() numberOfUpcomingAppointments = 2;
  @Input() date = "Aug 30";
  @Input() dateDifference1 = "2 days ago";
  @Input() appointmentTitle = "New Patient Appointment";
  @Input() provider = "Dr. Emily Jonson";
  @Output() confirmedButton = new EventEmitter<string>();
  @Input() appointments: AppointmentModel[];

  onClickedConfirmed(event) {
    this.confirmedButton.emit(event.target.value);
    console.log("confirmed");
  }

  ngOnInit(): void {
  }

}
