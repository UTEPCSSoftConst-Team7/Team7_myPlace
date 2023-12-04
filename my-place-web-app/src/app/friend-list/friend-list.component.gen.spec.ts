import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FriendListComponent } from './friend-list.component';

describe('FriendListComponent', () => {
  let component: FriendListComponent;
  let fixture: ComponentFixture<FriendListComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({});
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FriendListComponent],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    spyOn(FriendListComponent.prototype, 'grabUser');
    fixture = TestBed.createComponent(FriendListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`FriendList has default value`, () => {
    expect(component.FriendList).toEqual([]);
  });

  it(`CloseFriend has default value`, () => {
    expect(component.CloseFriend).toEqual([]);
  });

  it(`Blocked has default value`, () => {
    expect(component.Blocked).toEqual([]);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(FriendListComponent.prototype.grabUser).toHaveBeenCalled();
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

  describe('deleteUsers', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.deleteUsers();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
