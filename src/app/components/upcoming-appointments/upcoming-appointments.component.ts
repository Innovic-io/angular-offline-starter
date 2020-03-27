import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { EmployeeModel } from '../../models/employee.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent {
  public faChecked = faCheck;
  @Input() appointmentTitle: string;
  @Input() appointments: AppointmentModel[];
  @Input() appointment: AppointmentModel;
  @Input() currentUser: EmployeeModel;
  @Output() confirmedButton = new EventEmitter<string>();

  onClickedConfirmed(guid) {
    this.confirmedButton.emit(guid);
  }
}
