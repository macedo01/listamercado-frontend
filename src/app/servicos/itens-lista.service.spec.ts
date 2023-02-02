import { TestBed } from '@angular/core/testing';

import { ItensListaService } from './itens-lista.service';

describe('ItensListaService', () => {
  let service: ItensListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
