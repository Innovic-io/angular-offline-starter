import { Component } from '@angular/core';

import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-upload-patient-form',
  templateUrl: './upload-patient-form.component.html',
  styleUrls: ['./upload-patient-form.component.css']
})
export class UploadPatientFormComponent {

  constructor(private databaseService: DatabaseService) {
  }

  createDirectory() {
    return this.databaseService.createDir('files', 'Documents', 'Doc3.txt');
  }
}
