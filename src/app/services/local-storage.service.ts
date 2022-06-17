import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  set(key: string, value: string) {
    this.storage[key] = value;
  }

  get(key: string): string {
    return this.storage[key] || false;
  }

  setObject(key: string, value: any): void {
    if (!value) {
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }

  getObject(key: string): any {
    return JSON.parse(this.storage[key] || null);
  }

  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return obj;
  }

  remove(key: string): any {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }

  get Length(): number {
    return this.storage.length;
  }

  get isStorageEmpty(): boolean {
    return this.Length === 0;
  }
}
