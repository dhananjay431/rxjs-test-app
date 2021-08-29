import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
declare var $: any, _: any;
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  ht1(url: any) {
    return new Observable((subscriber) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          subscriber.next(json);
        });
    }).pipe(shareReplay());
  }
  ht2(url: any) {
    return new Observable((subscriber) => {
      $.ajax({
        url: url,

        success: function (result: any) {
          subscriber.next(result);
        },
      });
    });
  }
  ht3(url: any) {
    return from(
      new Promise((rev, rej) => {
        $.ajax({
          url: url,
          success: function (result: any) {
            rev(result);
          },
          error: function (err: any) {
            rej(err);
          },
        });
      })
    );
  }
  j = () => $;
  l = () => _;
}
