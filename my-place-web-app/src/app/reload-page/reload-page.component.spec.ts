import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadPageComponent } from './reload-page.component';

describe('ReloadPageComponent', () => {
  let component: ReloadPageComponent;
  let fixture: ComponentFixture<ReloadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReloadPageComponent]
    });
    fixture = TestBed.createComponent(ReloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
