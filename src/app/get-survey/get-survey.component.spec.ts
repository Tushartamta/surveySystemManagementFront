import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSurveyComponent } from './get-survey.component';

describe('GetSurveyComponent', () => {
  let component: GetSurveyComponent;
  let fixture: ComponentFixture<GetSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
