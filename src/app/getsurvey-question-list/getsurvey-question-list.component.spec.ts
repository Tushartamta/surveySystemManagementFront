import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsurveyQuestionListComponent } from './getsurvey-question-list.component';

describe('GetsurveyQuestionListComponent', () => {
  let component: GetsurveyQuestionListComponent;
  let fixture: ComponentFixture<GetsurveyQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsurveyQuestionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsurveyQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
