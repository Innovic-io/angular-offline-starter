import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHealthComponent } from './my-health.component';

describe('MyHealthComponent', () => {
  let component: MyHealthComponent;
  let fixture: ComponentFixture<MyHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
