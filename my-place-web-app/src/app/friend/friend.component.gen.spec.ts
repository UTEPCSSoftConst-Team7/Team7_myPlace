import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserBlogPost } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FriendComponent } from './friend.component';

describe('FriendComponent', () => {
  let component: FriendComponent;
  let fixture: ComponentFixture<FriendComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({});
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FriendComponent],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(FriendComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`ProfileBlogPost has default value`, () => {
    expect(component.ProfileBlogPost).toEqual([]);
  });

  it(`Blocked has default value`, () => {
    expect(component.Blocked).toEqual(false);
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

  describe('sendBack', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.sendBack();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });

  describe('grabUser', () => {
    it('makes expected calls', () => {
      spyOn(component, 'BlockedUser').and.callThrough();
      component.grabUser();
      expect(component.BlockedUser).toHaveBeenCalled();
    });
  });

  describe('friend', () => {
    it('makes expected calls', () => {
      spyOn(component, 'sendBack').and.callThrough();
      component.friend();
      expect(component.sendBack).toHaveBeenCalled();
    });
  });
});
