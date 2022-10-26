import { TestBed } from '@angular/core/testing';

import { NotasManagementService } from './notas-management.service';

describe('NotasManagementService', () => {
  let service: NotasManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
