import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getUsers().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('assets/UserFile.json');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getMessages', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getMessages().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('assets/UserFile.json');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getUSERS', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getUSERS().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('assets/UserFile.json');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getBlog', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getBlog().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('assets/UserFile.json');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('storeUsersInLocalStorage', () => {
    it('makes expected calls', () => {
      spyOn(component, 'executeCommand').and.callThrough();
      service.storeUsersInLocalStorage();
      expect(service.executeCommand).toHaveBeenCalled();
    });
  });

  describe('storeUSERSInLocalStorage', () => {
    it('makes expected calls', () => {
      spyOn(component, 'executeCommand').and.callThrough();
      service.storeUSERSInLocalStorage();
      expect(service.executeCommand).toHaveBeenCalled();
    });
  });

  describe('storeBlogInLocalStorage', () => {
    it('makes expected calls', () => {
      spyOn(component, 'executeCommand').and.callThrough();
      service.storeBlogInLocalStorage();
      expect(service.executeCommand).toHaveBeenCalled();
    });
  });

  describe('storeMessagesInLocalStorage', () => {
    it('makes expected calls', () => {
      spyOn(component, 'executeCommand').and.callThrough();
      service.storeMessagesInLocalStorage();
      expect(service.executeCommand).toHaveBeenCalled();
    });
  });
});
