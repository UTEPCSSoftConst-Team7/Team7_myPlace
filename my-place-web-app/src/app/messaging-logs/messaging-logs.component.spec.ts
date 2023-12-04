import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingLogsComponent } from './messaging-logs.component';

describe('MessagingLogsComponent', () => {
  let component: MessagingLogsComponent;
  let fixture: ComponentFixture<MessagingLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagingLogsComponent]
    });
    fixture = TestBed.createComponent(MessagingLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
