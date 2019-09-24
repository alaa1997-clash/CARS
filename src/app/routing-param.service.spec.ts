import { TestBed } from '@angular/core/testing';

import { RoutingParamService } from './routing-param.service';

describe('RoutingParamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingParamService = TestBed.get(RoutingParamService);
    expect(service).toBeTruthy();
  });
});
