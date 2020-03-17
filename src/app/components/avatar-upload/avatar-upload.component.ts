import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: [ './avatar-upload.component.css' ]
})

export class AvatarUploadComponent {
  @Input() user: EmployeeModel;
  public reader = new FileReader();
  public url;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {

      this.reader.readAsDataURL(event.target.files[0]);

      this.reader.onload = (eventUrl) => {
        this.url = eventUrl.target.result;
      };
    }
  }

}
