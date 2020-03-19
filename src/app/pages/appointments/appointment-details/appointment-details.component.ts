import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentModel } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  appointment: AppointmentModel;

  constructor(private route: ActivatedRoute, public appointmentService: AppointmentService) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    console.log(id);
    this.appointment = this.appointmentService.getAppointment(id);
    console.log(this.appointment);

  }

}
