import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBasicInfoComponent } from './profile-basic-info.component';

describe('ProfileBasicInfoComponent', () => {
  let component: ProfileBasicInfoComponent;
  let fixture: ComponentFixture<ProfileBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
