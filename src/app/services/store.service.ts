import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly people = new Map<string, string>();

  constructor() { }

  add(id: string, person: string) {
    this.people.set(id, person);
  }

  remove(id: string) {
    return this.people.delete(id);
  }

  size() {
    return this.people.size;
  }

  peopleAsString() {
    return JSON.stringify(this.people);
  }

  clear() {
    this.people.clear();
  }

  getPerson(id: string) {
    return this.people.get(id);
  }

}
