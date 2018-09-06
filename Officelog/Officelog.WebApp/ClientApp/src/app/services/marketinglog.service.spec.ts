import { TestBed, inject } from '@angular/core/testing';

import { MarketinglogService } from "./marketinglog.service";

describe('MarketinglogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketinglogService]
    });
  });

  it('should be created', inject([MarketinglogService], (service: MarketinglogService) => {
    expect(service).toBeTruthy();
  }));
});
