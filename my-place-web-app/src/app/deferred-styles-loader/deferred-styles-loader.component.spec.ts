import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredStylesLoaderComponent } from './deferred-styles-loader.component';

describe('DeferredStylesLoaderComponent', () => {
  let component: DeferredStylesLoaderComponent;
  let fixture: ComponentFixture<DeferredStylesLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeferredStylesLoaderComponent]
    });
    fixture = TestBed.createComponent(DeferredStylesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
