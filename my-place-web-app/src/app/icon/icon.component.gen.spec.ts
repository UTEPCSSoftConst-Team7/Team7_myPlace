import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    const userServiceStub = () => ({});
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [IconComponent],
      providers: [
        { provide: UserService, useFactory: userServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`icons has default value`, () => {
    expect(component.icons).toEqual([
      `assets/dice.png`,
      `assets/cat.png`,
      `assets/catFist.png`,
      `assets/joji.png`,
      `assets/mfDoom.png`,
      `assets/peopleiconmp.png`,
      `assets/pizzabella.png`,
      `assets/sandy.png`,
      `assets/spiderman.png`,
      `assets/amongUs.png`
    ]);
  });

  describe('sendBack', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.sendBack();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
