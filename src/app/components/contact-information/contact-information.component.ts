import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {
  @Input() email: string;
  @Input() address: string;
  @Input() state: string;
  @Input() city: string;
  @Input() zip: number;
  @Input() cellPhone: number;
  @Input() homePhone: number;
  @Input() workPhone: number;

}
