import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReadMePageComponent } from './read-me-page.component';

describe('ReadMePageComponent', () => {
  let component: ReadMePageComponent;
  let fixture: ComponentFixture<ReadMePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ReadMePageComponent]
    });
    fixture = TestBed.createComponent(ReadMePageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
