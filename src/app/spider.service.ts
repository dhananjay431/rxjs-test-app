import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpiderService implements Resolve<any> {
  constructor() {}

  public news: any = undefined;

  get(url: any) {
    return new Promise((rev, rej) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          rev(json);
        });
    });
  }
  resolve(): Observable<any> {
    return from(this.get('https://jsonplaceholder.typicode.com/users'));
  }
}
