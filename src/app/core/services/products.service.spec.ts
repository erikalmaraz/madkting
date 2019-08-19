import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('productsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: productsService = TestBed.get(productsService);
    expect(service).toBeTruthy();
  });
});
