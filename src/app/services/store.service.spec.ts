import { TestBed, inject } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService]
    });
  });

  it('should be created', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should be empty', inject([StoreService], (service: StoreService) => {
    expect(service.size()).toEqual(0);
  }));

  it('should append people', inject([StoreService], (service: StoreService) => {
    const size = service.size();
    service.add('1', 'John');
    expect(service.size()).toEqual(size + 1);
  }));

  it('should remove people', inject([StoreService], (service: StoreService) => {
    const size = service.size();
    service.add('12345', 'John');
    expect(service.size()).toEqual(size + 1);
    expect(service.remove('12345')).toBeTruthy();
    expect(service.size()).toEqual(size);
  }));

  it('should clear people', inject([StoreService], (service: StoreService) => {
    service.add('1', 'John');
    service.add('2', 'James');
    service.add('3', 'Jason');
    service.clear();
    expect(service.size()).toEqual(0);
  }));

});
