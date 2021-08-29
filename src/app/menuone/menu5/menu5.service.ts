import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { finalize, mergeMap, tap } from 'rxjs/operators';
import { HeroService } from '../../hero.service';

@Injectable({
  providedIn: 'root',
})
export class Menu5Service {
  ajax: any = {};
  constructor(private ht: HeroService) {}
  getData(reqArr: any) {
    let that = this;
    let ajax: any = [];
    for (let i in reqArr) {
      if (Array.isArray(reqArr[i])) {
        ajax[i] = that.ht.ht1(reqArr[i][0], reqArr[i][1]);
      } else {
        ajax[i] = that.ht.ht1(reqArr[i]);
      }
    }
    return ajax;
  }
  getpro(reqArr: any) {
    let that = this;
    let ajax: any = {};
    let getob: any = that.getData(reqArr);
    for (let i in getob) {
      ajax[i] = new Promise((rev, rej) => {
        getob[i].subscribe(
          (resp: any) => {
            rev(resp);
          },
          (err: any) => {
            rej(err);
          }
        );
      });
    }
    return ajax;
  }

  getallData(reqArr: any) {
    let that = this;

    let menu1: any = this.getpro(reqArr);

    // let user: any = this.getpro({
    //   users: 'https://jsonplaceholder.typicode.com/users/' + id,
    // });
    //return forkJoin([menu1, menu2, menu3, menu4, menu5, forkJoin(user)]);
    return forkJoin(menu1);
  }
  pageData(reqArr: any) {
    let that = this;
    let time: any = new Date().getTime();
    return of(123).pipe(
      tap((d) => {
        console.log('start');
        that.ht.j()('#loader').show();
      }),
      mergeMap((d) => {
        return that.getallData(reqArr);
      }),
      finalize(() => {
        console.log('end');
        that.ht.j()('#loader').hide();
      }) //
    );
  }
}
