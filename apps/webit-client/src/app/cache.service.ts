import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
  storage: Storage = window.sessionStorage;

  get(key: string): any {
    const strVal = this.storage.getItem(key);
    return JSON.parse(strVal);
  }

  set(key: string, value: any, ttl = 0): string {
    if (!key) {
      // key cannot be falsy, to make retrievals safe
      throw new Error('CacheService.set(): invalid/null key: ' + String(key));
    }
    const strVal = JSON.stringify(value);
    this.storage.setItem(key, strVal);
    return strVal;
  }
}
