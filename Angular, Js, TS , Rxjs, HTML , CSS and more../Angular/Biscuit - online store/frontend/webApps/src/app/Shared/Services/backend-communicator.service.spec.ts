import { TestBed } from '@angular/core/testing';

import { BackendCommunicatorService } from './backend-communicator.service';

describe('BackendCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendCommunicatorService = TestBed.get(BackendCommunicatorService);
    expect(service).toBeTruthy();
  });
});
