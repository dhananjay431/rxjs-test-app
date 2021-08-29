import { Component, OnInit } from '@angular/core';
import { concat, Observable, of, Subject } from 'rxjs';
import { debounceTime, map, shareReplay, tap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
const time = 500;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private heroservice: HeroService) {}
  ob1$ = this.heroservice.ht1('https://jsonplaceholder.typicode.com/users');
  withTime$ = this.ob1$.pipe(
    map((d: any) => {
      return d.map((dd: any) => {
        dd.time = new Date().getTime();
        dd.adrs = Object.values(dd.address).join();
        return dd;
      });
    }),
    shareReplay()
  );
  sub$: any = new Subject().pipe(debounceTime(time));
  withTime2$ = this.withTime$.pipe(
    map((d) => {
      return d.map((dd: any) => {
        dd.time = '_' + new Date().getTime();
        return dd;
      });
    })
  );
  search: any = '';
  withTimeSearch$ = this.withTime$.pipe(
    map((d) => {
      return d.map((dd: any) => {
        dd.time = '_' + new Date().getTime();
        return dd;
      });
    })
  );
  searchFunction() {
    this.sub$.next(this.search);
  }
  matFilter(d: any, resp: any) {
    return d
      .filter((dd: any) => {
        return dd.name.match(RegExp('^' + resp, 'i'));
      })
      .map((dd: any) => {
        dd.time = '_' + new Date().getTime();
        return dd;
      });
  }
  subSearchFunction(resp: any) {
    let that = this;
    return this.withTime$.pipe(
      map((d) => {
        return that.matFilter(d, resp);
      })
    );
  }
  saveSearchremove() {}
  save(withTimeSearchData: any) {
    let that = this;
    that.search = '';
    that
      .subSearchFunction(that.search)
      .pipe(
        map((d) => {
          return d
            .filter((dd: any) => {
              return dd.flag == true;
            })
            .map((dd: any) => {
              return {
                new: { dbtest: dd },
                old: {
                  dbtest: {
                    id: dd.id,
                  },
                },
              };
            });
        })
      )
      .subscribe((resp) => {
        console.log('going to save =>', resp);
        that.search = '';
        that.sub$.next(that.search);
      });
  }
  ngOnInit(): void {
    this.sub$.subscribe((resp: any) => {
      this.withTimeSearch$ = this.subSearchFunction(resp);
    });
  }
}
