import { Component, OnInit } from '@angular/core';
import { forkJoin, from, Observable, of } from 'rxjs';
import { concatAll, concatMap, mergeMap, tap, toArray } from 'rxjs/operators';
import { HeroService } from '../../hero.service';
import { Menu3Service } from './menu3.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.scss'],
})
export class Menu3Component implements OnInit {
  constructor(private hs: HeroService, private ms: Menu3Service) {}
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  data$ = this.ms.getData().pipe(
    tap((x) => {
      console.log('x=>', x);
    })
  );

  selected = [];
  dd: any = {};
  ddd = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  rows: any = [];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  ngOnInit() {
    //*ngIf="data$ | async as data"

    let that = this;

    that.rows = that.hs.l().chain(Array(100).fill(this.ddd)).flatMap().value();
    console.log(that.rows);
    // that.hs
    //   .j()('#main')
    //   .append(
    //     `<div *ngIf="data$ | async as data"> <pre> {{ data | json }} </pre > </div>`
    //   );
  }
  displayCheck(row: any) {
    return row.name !== 'Ethel Price';
  }
}
