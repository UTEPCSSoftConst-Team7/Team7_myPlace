import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  get<T>(key: string): T | null {
    const itemString = localStorage.getItem(key);
    if (itemString === null) {
      return null;
    }

    return JSON.parse(itemString);
  }

  set<T>(key: string, value: T): void {
    const itemString = JSON.stringify(value);
    localStorage.setItem(key, itemString);
  }
}
