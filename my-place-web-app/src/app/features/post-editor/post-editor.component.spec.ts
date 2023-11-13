import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditorComponent } from './post-editor.component';

describe('PostEditorComponent', () => {
  let component: PostEditorComponent;
  let fixture: ComponentFixture<PostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
