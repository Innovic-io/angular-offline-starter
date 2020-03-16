import { Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: [ './accordions.component.css' ]
})
export class AccordionsComponent {
  @ContentChildren(AccordionComponent) contentChildren !: QueryList<AccordionComponent>;

}
