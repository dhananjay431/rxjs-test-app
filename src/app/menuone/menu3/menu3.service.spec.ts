import { TestBed } from '@angular/core/testing';

import { Menu3Service } from './menu3.service';

describe('Menu3Service', () => {
  let service: Menu3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menu3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
