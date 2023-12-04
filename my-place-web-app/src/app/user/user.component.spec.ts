import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('test my_place_web_app', function() {
  it('test my-place-web-app.UserComponent.delete', function(done) {
      let post = {
          content: 'test',
}    })
})


describe('test my_place_web_app', function() {
  it('test my-place-web-app.UserComponent.like', function(done) {
      let post = new my_place_web_app.UserBlogPost();
      post.content = "test content";
      post.likes = 0;
      post.UserLike = false;
      let component = new my_place_web_app.UserComponent();
      component.like(post);
      assert.equal(post.likes, 1);
      assert.equal(post.UserLike, true);
      done();
  })
})
