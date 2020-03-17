import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: [ './avatar-upload.component.css' ]
})

export class AvatarUploadComponent {
  @Input() user: EmployeeModel;
  private reader = new FileReader();
  public url;
  @Output() imageURL = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer) {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {

      this.reader.readAsDataURL(event.target.files[0]);

      this.reader.onload = (eventURL) => {
        this.url =  this.sanitizer.bypassSecurityTrustUrl(eventURL.target.result.toString());
        this.imageURL.emit(eventURL.target.result.toString());
      };
    }
  }

}
