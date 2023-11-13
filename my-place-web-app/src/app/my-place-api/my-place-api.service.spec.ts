/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyPlaceApiService } from './my-place-api.service';

describe('Service: MyPlaceApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPlaceApiService]
    });
  });

  it('should ...', inject([MyPlaceApiService], (service: MyPlaceApiService) => {
    expect(service).toBeTruthy();
  }));
});
