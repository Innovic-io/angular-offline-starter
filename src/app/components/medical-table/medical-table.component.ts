import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { AppointmentType, enumSelector } from '../../models/system.models';

@Component({
  selector: 'app-medical-table',
  templateUrl: './medical-table.component.html',
  styleUrls: [ './medical-table.component.css' ]
})
export class MedicalTableComponent {
  public appTypes = enumSelector(AppointmentType);
  public faFileAlt = faFileAlt;
  @Input() appointments: AppointmentModel[];
  @Input() total: number;
  @Input() selectedType: string;
  @Output() checkedAll = new EventEmitter<boolean>();
  @Output() checked = new EventEmitter<{ checked: boolean, guid: string }>();
  @Output() pager = new EventEmitter();

  checkAll(event) {
    this.checkedAll.emit(event);
  }

  checkBox(event, appointmentGUID: string) {
    this.checked.emit({ checked: event, guid: appointmentGUID });
  }

  onClickFilterByType(event) {
    this.selectedType = event;
  }

  setPage(currentPage) {
    this.pager.emit(currentPage);
  }
}
