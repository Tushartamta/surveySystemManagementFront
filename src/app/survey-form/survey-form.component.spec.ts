import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyServiceServiceComponent } from './survey-form.component';

describe('SurveyFormComponent', () => {
  let component: SurveyServiceServiceComponent;
  let fixture: ComponentFixture<SurveyServiceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyServiceServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyServiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
