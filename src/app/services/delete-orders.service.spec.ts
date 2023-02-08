import { TestBed } from '@angular/core/testing';

import { DeleteOrdersServiceService } from './delete-orders.service';

describe('DeleteOrdersServiceService', () => {
  let service: DeleteOrdersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteOrdersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
