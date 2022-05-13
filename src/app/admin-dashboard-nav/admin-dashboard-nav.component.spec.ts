import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardNavComponent } from './admin-dashboard-nav.component';

describe('AdminDashboardNavComponent', () => {
  let component: AdminDashboardNavComponent;
  let fixture: ComponentFixture<AdminDashboardNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
