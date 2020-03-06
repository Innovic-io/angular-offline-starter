import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AppointmentModel } from '../../models/appointment.model';
import {AppointmentService} from "../../services/appointment.service";
import {doctor} from "../../data/dummy";

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {
  @Input() appointmentTitle: string;
  @Output() confirmedButton = new EventEmitter<string>();
  @Input() appointments: AppointmentModel[];

  constructor(private appointmentService: AppointmentService) {
  }

  onClickedConfirmed(event) {
    this.confirmedButton.emit(event.target.value);
    console.log('confirmed');
  }

  ngOnInit(): void {
    this.appointmentService.getAllDoctorAppointments(doctor.guid);
  }
}
