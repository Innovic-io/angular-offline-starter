import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPastComponent } from './upcoming-past.component';

describe('UpcomingPastComponent', () => {
  let component: UpcomingPastComponent;
  let fixture: ComponentFixture<UpcomingPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
