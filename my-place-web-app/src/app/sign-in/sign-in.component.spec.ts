import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({
      getUsers: () => ({ subscribe: f => f({}) })
    });
    const routerStub = () => ({
      navigateByUrl: string => ({}),
      navigate: array => ({})
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SignInComponent],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`users has default value`, () => {
    expect(component.users).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(userServiceStub, 'getUsers').and.callThrough();
      component.ngOnInit();
      expect(userServiceStub.getUsers).toHaveBeenCalled();
    });
  });

  describe('CheckUser', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.CheckUser();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
