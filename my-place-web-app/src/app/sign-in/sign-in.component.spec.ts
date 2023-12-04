import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('test my_place_web_app', function() {
  it('test my-place-web-app.SignInComponent.CheckUser', function(done) {
      this.timeout(10000);
    var user = {
      username: 'admin',
      password: 'admin'
    };
    my_place_web_app.SignInComponent.CheckUser(user)
    .then(function(result) {
        assert.equal(result, true);
        done();
    })
    .catch(function(error) {
        done(error);
    });
  })
})
