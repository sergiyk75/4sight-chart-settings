import { TestBed } from '@angular/core/testing';

import { InMemorySettingsService } from './in-memory-settings.service';

describe('InMemorySettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemorySettingsService = TestBed.get(InMemorySettingsService);
    expect(service).toBeTruthy();
  });
});
