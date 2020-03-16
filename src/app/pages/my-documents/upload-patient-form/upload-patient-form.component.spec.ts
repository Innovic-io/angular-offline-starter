import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPatientFormComponent } from './upload-patient-form.component';

describe('UploadPatientFormComponent', () => {
  let component: UploadPatientFormComponent;
  let fixture: ComponentFixture<UploadPatientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPatientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
