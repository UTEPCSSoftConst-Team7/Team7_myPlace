import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({
      storeUsersInLocalStorage: () => ({}),
      storeMessagesInLocalStorage: () => ({}),
      storeBlogInLocalStorage: () => ({}),
      storeUSERSInLocalStorage: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomepageComponent],
      providers: [{ provide: UserService, useFactory: userServiceStub }]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`users has default value`, () => {
    expect(component.users).toEqual([]);
  });

  it(`messages has default value`, () => {
    expect(component.messages).toEqual([]);
  });

  it(`USERs has default value`, () => {
    expect(component.USERs).toEqual([]);
  });

  it(`Blog has default value`, () => {
    expect(component.Blog).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(userServiceStub, 'storeUsersInLocalStorage').and.callThrough();
      spyOn(userServiceStub, 'storeMessagesInLocalStorage').and.callThrough();
      spyOn(userServiceStub, 'storeBlogInLocalStorage').and.callThrough();
      spyOn(userServiceStub, 'storeUSERSInLocalStorage').and.callThrough();
      component.ngOnInit();
      expect(userServiceStub.storeUsersInLocalStorage).toHaveBeenCalled();
      expect(userServiceStub.storeMessagesInLocalStorage).toHaveBeenCalled();
      expect(userServiceStub.storeBlogInLocalStorage).toHaveBeenCalled();
      expect(userServiceStub.storeUSERSInLocalStorage).toHaveBeenCalled();
    });
  });
});
