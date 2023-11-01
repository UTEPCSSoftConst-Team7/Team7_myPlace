import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMePageComponent } from './read-me-page.component';

describe('ReadMePageComponent', () => {
  let component: ReadMePageComponent;
  let fixture: ComponentFixture<ReadMePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadMePageComponent]
    });
    fixture = TestBed.createComponent(ReadMePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
