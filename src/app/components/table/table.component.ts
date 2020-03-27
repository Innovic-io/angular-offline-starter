import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() appointments: AppointmentModel[];
  @Input() total: number;
  @Output() checked = new EventEmitter<{ checked: boolean, guid: string }>();
  @Output() checkedAll = new EventEmitter<boolean>();
  @Output() pager = new EventEmitter();

  checkBox(event, appointmentGUID: string) {
    this.checked.emit({checked: event, guid: appointmentGUID});
  }

  checkAll(event) {
    this.checkedAll.emit(event);
  }

  setPage(currentPage) {
    this.pager.emit(currentPage);
  }
}
