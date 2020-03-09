import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { EmployeeModel } from '../../models/employee.model';
import { doctor } from '../../data/dummy';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent {
  @Input() appointmentTitle: string;
  @Output() confirmedButton = new EventEmitter<string>();
  @Input() appointments: AppointmentModel[];
  @Input() appointment: AppointmentModel;
  @Input() currentUser: EmployeeModel;
  public  faChecked = faCheck;
  dateS = new Date();

  constructor(private appointmentService: AppointmentService) { }
  onClickedConfirmed(guid) {
    this.confirmedButton.emit(guid);
    this.appointmentService.confirmAppointment(doctor.guid, guid);
  }

}
