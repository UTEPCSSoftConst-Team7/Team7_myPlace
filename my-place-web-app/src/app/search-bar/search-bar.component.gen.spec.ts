import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({});
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchBarComponent],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`options has default value`, () => {
    expect(component.options).toEqual([]);
  });

  it(`users has default value`, () => {
    expect(component.users).toEqual([]);
  });

  it(`isInputValid has default value`, () => {
    expect(component.isInputValid).toEqual(false);
  });

  describe('search', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.search();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
