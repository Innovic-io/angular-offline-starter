import { Pipe, PipeTransform } from '@angular/core';
import { HistoryChanges } from '../models/appointment.model';

@Pipe({
  name: 'reverseArrayOfAppointmentHistoryChanges'
})
export class ReverseArrayOfAppointmentHistoryChangesPipe implements PipeTransform {

  transform(value: HistoryChanges[]): HistoryChanges[] {
    return value.slice().reverse();
  }

}
