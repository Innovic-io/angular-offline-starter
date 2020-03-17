import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { AppointmentType, enumSelector } from '../../models/system.models';

@Component({
  selector: 'app-medical-table',
  templateUrl: './medical-table.component.html',
  styleUrls: ['./medical-table.component.css']
})
export class MedicalTableComponent {
  @Input() appointments: AppointmentModel[];
  @Input() selectedType: string;
  @Output() checkedAll = new EventEmitter<boolean>();
  @Output() checked = new EventEmitter<{ checked: boolean, guid: string }>();
  appTypes = enumSelector(AppointmentType);
  public faFileAlt = faFileAlt;

  checkAll(event) {
    this.checkedAll.emit(event);
  }

  checkBox(event, appointmentGUID: string) {
    this.checked.emit({ checked: event, guid: appointmentGUID });
  }

  onClickFilterByType(event) {
    console.log(event);
    this.selectedType = event;
  }
}
