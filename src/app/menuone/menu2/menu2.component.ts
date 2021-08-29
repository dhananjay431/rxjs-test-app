import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ColumnMode,
  DatatableComponent,
  throttleable,
} from '@swimlane/ngx-datatable';

declare var _: any;
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
})
export class Menu2Component implements OnInit {
  constructor() {}
  rows: any = [];
  page: any = {
    totalElements: 1000,
    pageNumber: 1000,
    size: 10,
  };

  ColumnMode = ColumnMode;
  ngOnInit(): void {
    let that = this;
    that.getData();

    // setInterval(() => {
    //   that.rows = _.shuffle(that.rows);
    //   that.rows = [...that.rows];
    // }, 1000);
  }

  getData() {
    let that = this;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        that.rows = _.chain(Array(10)).fill(json).flatMap().shuffle().value();
      });
  }
  //   {
  //   "id": 1,
  //   "name": "Leanne Graham",
  //   "username": "Bret",
  //   "email": "Sincere@april.biz",
  //   "address": {
  //     "street": "Kulas Light",
  //     "suite": "Apt. 556",
  //     "city": "Gwenborough",
  //     "zipcode": "92998-3874",
  //     "geo": {
  //       "lat": "-37.3159",
  //       "lng": "81.1496"
  //     }
  //   },
  //   "phone": "1-770-736-8031 x56442",
  //   "website": "hildegard.org",
  //   "company": {
  //     "name": "Romaguera-Crona",
  //     "catchPhrase": "Multi-layered client-server neural-net",
  //     "bs": "harness real-time e-markets"
  //   }
  // },
  columns = [
    { prop: 'id' },
    { name: 'name' },
    { name: 'username' },
    { name: 'email' },
    { name: 'phone' },
    { name: 'website' },
  ];
  setPage(pageInfo: any) {
    let that = this;
    console.log('pageInfo=>', pageInfo);
    this.page.pageNumber = pageInfo.offset;
    that.getData();
  }
}
