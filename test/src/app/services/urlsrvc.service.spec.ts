import { TestBed } from '@angular/core/testing';

import { UrlsrvcService } from './urlsrvc.service';

describe('UrlsrvcService', () => {
  let service: UrlsrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlsrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
