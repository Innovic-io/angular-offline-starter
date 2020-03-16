import { Pipe, PipeTransform } from '@angular/core';
import { MessageModel } from '../models/message.model';
import { AppointmentModel } from '../models/appointment.model';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(appointments: AppointmentModel[], selectedType: string): AppointmentModel[] {
    if (!appointments || !selectedType) {
      return appointments;
    }
    return appointments.filter(item => {
      return item.appType === selectedType;
    });
  }
}
