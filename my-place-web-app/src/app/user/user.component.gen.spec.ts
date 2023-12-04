import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserBlogPost } from '../User';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({});
    const activatedRouteStub = () => ({});
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UserComponent],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`ProfileBlogPost has default value`, () => {
    expect(component.ProfileBlogPost).toEqual([]);
  });

  it(`showTextArea has default value`, () => {
    expect(component.showTextArea).toEqual(false);
  });

  it(`showFrindPost has default value`, () => {
    expect(component.showFrindPost).toEqual(false);
  });

  it(`showBioArea has default value`, () => {
    expect(component.showBioArea).toEqual(false);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'grabUser').and.callThrough();
      spyOn(component, 'grabBlogPost').and.callThrough();
      component.ngOnInit();
      expect(component.grabUser).toHaveBeenCalled();
      expect(component.grabBlogPost).toHaveBeenCalled();
    });
  });
});
