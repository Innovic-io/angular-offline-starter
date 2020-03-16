import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: [ './accordion.component.css' ]
})
export class AccordionComponent {
  @Input() title: string;

  toggleAccordion(el: HTMLDivElement) {
    if (el.classList.contains('show')) {
      el.classList.toggle('show');
      return;
    }

    const existingAccordions = document.getElementsByClassName('accordion-el');

    Array.from(existingAccordions).forEach(currentElement => {
      currentElement.classList.remove('show');
    });

    el.classList.toggle('show');
  }
}
