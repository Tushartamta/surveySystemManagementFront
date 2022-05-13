import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSurveyQuestionComponent } from './get-survey-question.component';

describe('GetSurveyQuestionComponent', () => {
  let component: GetSurveyQuestionComponent;
  let fixture: ComponentFixture<GetSurveyQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSurveyQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSurveyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
