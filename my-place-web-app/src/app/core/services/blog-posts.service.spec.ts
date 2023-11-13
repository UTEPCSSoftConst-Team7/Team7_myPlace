import { TestBed } from '@angular/core/testing';

import { BlogPostsService } from './blog-posts.service';

describe('BlogPostsService', () => {
  let service: BlogPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
