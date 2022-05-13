import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserSurveyResponseListComponent } from './get-user-survey-response-list.component';

describe('GetUserSurveyResponseListComponent', () => {
  let component: GetUserSurveyResponseListComponent;
  let fixture: ComponentFixture<GetUserSurveyResponseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserSurveyResponseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserSurveyResponseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
