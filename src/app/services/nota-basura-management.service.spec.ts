import { TestBed } from '@angular/core/testing';

import { NotaBasuraManagementService } from './nota-basura-management.service';

describe('NotaBasuraManagementService', () => {
  let service: NotaBasuraManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotaBasuraManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
