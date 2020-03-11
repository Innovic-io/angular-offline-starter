import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalStatsComponent } from './vital-stats.component';

describe('VitalStatsComponent', () => {
  let component: VitalStatsComponent;
  let fixture: ComponentFixture<VitalStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
