import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  http(url: string) {
    return new Observable((subscriber) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          subscriber.next(json);
        });
    });
  }
}
