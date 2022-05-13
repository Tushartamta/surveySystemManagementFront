import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShowOnlyQuestionComponent } from './dashboard-show-only-question.component';

describe('DashboardShowOnlyQuestionComponent', () => {
  let component: DashboardShowOnlyQuestionComponent;
  let fixture: ComponentFixture<DashboardShowOnlyQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardShowOnlyQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShowOnlyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
