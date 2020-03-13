import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @ContentChildren(TabComponent) contentChildren !: QueryList<TabComponent>;

  onTabClick(index) {
    this.contentChildren.forEach(item => {
      item.active = false;
    });
    const element = this.contentChildren.toArray()[index];
    element.active = true;
  }

}
