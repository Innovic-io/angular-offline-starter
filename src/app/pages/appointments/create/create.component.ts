import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentModel } from "../../../models/appointment.model";
import { AppointmentService} from "../../../services/appointment.service";

import { doctor } from '../../../data/dummy';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  providers = [doctor];

  constructor(private appointmentService: AppointmentService) { }

  public appointment = new AppointmentModel();

  onSubmit() {
    console.log(this.appointment);
    this.appointmentService.createAppointment(this.appointment);
  }

  ngOnInit(): void {
  }

}
