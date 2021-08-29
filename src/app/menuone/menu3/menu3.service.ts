import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HeroService } from '../../hero.service';
@Injectable({
  providedIn: 'root',
})
export class Menu3Service {
  constructor(private hs: HeroService) {}
  user() {
    return this.hs.ht1('https://jsonplaceholder.typicode.com/users');
  }
  getData() {
    //return forkJoin([this.test(), this.test()]);
    return forkJoin({ test1: this.test(), test2: this.test() });
  }

  test() {
    return new Promise((rev, rej) => {
      ((d) => {
        d.subscribe(
          (resp) => {
            rev(resp);
          },
          (err) => {
            rej(err);
          }
        );
      })(this.user());
    });
  }
}
