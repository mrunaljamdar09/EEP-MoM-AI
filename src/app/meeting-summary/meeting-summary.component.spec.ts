import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSummaryComponent } from './meeting-summary.component';

describe('MeetingSummaryComponent', () => {
  let component: MeetingSummaryComponent;
  let fixture: ComponentFixture<MeetingSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingSummaryComponent]
    });
    fixture = TestBed.createComponent(MeetingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
