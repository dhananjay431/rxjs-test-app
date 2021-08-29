import { TestBed } from '@angular/core/testing';

import { Menu5Service } from './menu5.service';

describe('Menu5Service', () => {
  let service: Menu5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menu5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
