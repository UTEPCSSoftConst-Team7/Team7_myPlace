import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostCommentComponent } from './blog-post-comment.component';

describe('BlogPostCommentComponent', () => {
  let component: BlogPostCommentComponent;
  let fixture: ComponentFixture<BlogPostCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
