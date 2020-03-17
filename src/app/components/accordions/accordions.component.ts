import { Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';


/**
 * <app-accordions>
 * <app-accordion title="Inbox">
 * <p>Some text</p>
 * </app-accordion>
 * <app-accordion title="Sent">
 * <p>Something else</p>
 * </app-accordion>
 * </app-accordions>
 */

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: [ './accordions.component.css' ]
})
export class AccordionsComponent {
  @ContentChildren(AccordionComponent) contentChildren !: QueryList<AccordionComponent>;

}
