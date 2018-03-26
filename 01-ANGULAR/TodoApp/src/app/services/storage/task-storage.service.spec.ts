import { TestBed, inject } from '@angular/core/testing';

import { TaskStorageService } from './task-storage.service';

describe('TaskStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskStorageService]
    });
  });

  it('should be created', inject([TaskStorageService], (service: TaskStorageService) => {
    expect(service).toBeTruthy();
  }));
});
