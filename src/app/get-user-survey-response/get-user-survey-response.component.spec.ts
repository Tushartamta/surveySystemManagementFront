import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserSurveyResponseComponent } from './get-user-survey-response.component';

describe('GetUserSurveyResponseComponent', () => {
  let component: GetUserSurveyResponseComponent;
  let fixture: ComponentFixture<GetUserSurveyResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserSurveyResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserSurveyResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
