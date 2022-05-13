import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSurveyListComponent } from './get-survey-list.component';

describe('GetSurveyListComponent', () => {
  let component: GetSurveyListComponent;
  let fixture: ComponentFixture<GetSurveyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSurveyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
