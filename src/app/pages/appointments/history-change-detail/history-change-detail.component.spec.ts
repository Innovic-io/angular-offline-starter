import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChangeDetailComponent } from './history-change-detail.component';

describe('HistoryChangeDetailComponent', () => {
  let component: HistoryChangeDetailComponent;
  let fixture: ComponentFixture<HistoryChangeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryChangeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryChangeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
