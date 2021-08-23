import { Component, OnInit } from '@angular/core';
import { concat, of } from 'rxjs';
import {
  filter,
  map,
  mergeMap,
  shareReplay,
  take,
  tap,
  toArray,
} from 'rxjs/operators';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private heroservice: HeroService) {}
  search: any = '';

  searchArr$: any = this.heroservice.http(
    'https://jsonplaceholder.typicode.com/comments'
  );
  setCurr(item: any) {
    this.search = item.name;
    this.searchFun();
  }
  searchD$ = this.searchArr$.pipe(
    map((d: any) => {
      return d.slice(0, 5);
    })
  );
  searchFun() {
    let that = this;
    console.log(that.search);
    this.searchD$ = this.searchArr$.pipe(
      map((d: any) => {
        return d
          .filter((dd: any) => {
            return dd.name.match(RegExp('^' + that.search, 'i'));
          })
          .slice(0, 5);
      })
    );
  }

  ob1$: any = this.heroservice
    .http('https://jsonplaceholder.typicode.com/posts')
    .pipe(shareReplay());
  ob2$ = this.heroservice.http('https://jsonplaceholder.typicode.com/comments');
  ob3$ = this.heroservice.http('https://jsonplaceholder.typicode.com/albums');

  show() {
    return this.ob1$.pipe(
      mergeMap((d: any) => {
        return concat(this.ob1$, this.ob2fun(d[0]));
      }),
      toArray()
    );
  }
  ob2fun(data: any) {
    console.log('ob2func=>', data);
    return this.ob2$;
  }
  ngOnInit(): void {
    concat(this.show()).subscribe(console.log);
  }
}
