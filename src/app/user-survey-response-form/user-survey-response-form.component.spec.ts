import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyResponseFormComponent } from './user-survey-response-form.component';

describe('UserSurveyResponseFormComponent', () => {
  let component: UserSurveyResponseFormComponent;
  let fixture: ComponentFixture<UserSurveyResponseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSurveyResponseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyResponseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
