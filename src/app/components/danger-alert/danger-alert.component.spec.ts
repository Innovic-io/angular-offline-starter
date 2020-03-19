import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerAlertComponent } from './danger-alert.component';

describe('DangerAlertComponent', () => {
  let component: DangerAlertComponent;
  let fixture: ComponentFixture<DangerAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
