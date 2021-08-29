import { Component, OnInit } from '@angular/core';
import { forkJoin, of, from } from 'rxjs';
import { finalize, mergeMap, tap, toArray } from 'rxjs/operators';
import { Menu5Service } from './menu5.service';
import { HeroService } from '../../hero.service';
import { menu5data } from './menu5.service.data';
import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-menu5',
  templateUrl: './menu5.component.html',
  styleUrls: ['./menu5.component.scss'],
})
export class Menu5Component implements OnInit {
  reqArr: any = {
    posttest: [
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'dhananjay',
        body: 'belhekar',
        email: 'dhananjaybelhekar@gmail.com',
        userId: 1,
      },
    ],
    posts: 'https://jsonplaceholder.typicode.com/posts',
    comments: 'https://jsonplaceholder.typicode.com/comments',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    todos: 'https://jsonplaceholder.typicode.com/todos',
    users: 'https://jsonplaceholder.typicode.com/users',
    users1: 'https://jsonplaceholder.typicode.com/users/1',
    users2: 'https://jsonplaceholder.typicode.com/users/2',
    users3: 'https://jsonplaceholder.typicode.com/users/3',
    post: [
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    ],
  };
  constructor(
    private menu5service: Menu5Service,
    private heroservice: HeroService
  ) {}

  data$: any = this.menu5service.pageData(this.reqArr);

  ngOnInit(): void {
    let that = this;
  }
  changeData(data: any) {
    let that = this;
    console.log('changeData=>', data);
    let temp = [
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/comments',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/users',
      ,
    ];
    data = Object.assign(
      {},
      that.heroservice.l().shuffle(
        that.heroservice
          .l()
          .chain(Array(Math.ceil(Math.random() * 10)).fill(temp))
          .flatMap()
          .value()
      )
    );
    that.data$ = of(data);
    // let that = this;
    // id = Math.ceil(Math.random() * 10);
    // let user: any = that.menu5service.getpro({
    //   users: 'https://jsonplaceholder.typicode.com/users/' + id,
    // });

    // that.heroservice.j()('#loader').show();
    // forkJoin(user).subscribe((resp) => {
    //   data[5] = resp;
    //   console.log('change=>', resp);
    //   console.log(data, id);
    //   that.heroservice.j()('#loader').hide();
    // });
  }
  setData() {
    let that = this;
    let temp = [
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/comments',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/users',
    ];

    let req = Object.assign(
      {},
      that.heroservice.l().shuffle(
        that.heroservice
          .l()
          .chain(Array(Math.ceil(Math.random() * 10)).fill(temp))
          .flatMap()
          .value()
      )
    );

    this.data$ = that.menu5service.pageData(req);
  }
}
