import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
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
      ajax[i] = that.ht.ht1(reqArr[i]);
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
}
