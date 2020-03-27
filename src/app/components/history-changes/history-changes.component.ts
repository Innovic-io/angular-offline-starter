import { Component, Input } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-history-changes',
  templateUrl: './history-changes.component.html',
  styleUrls: [ './history-changes.component.css' ]
})
export class HistoryChangesComponent {
  @Input() appointment: AppointmentModel;
}
