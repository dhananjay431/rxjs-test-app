import { Component, OnInit } from '@angular/core';
import { forkJoin, of, from, Observable, Subject, Subscriber } from 'rxjs';
import {
  concatMap,
  finalize,
  map,
  mergeMap,
  tap,
  toArray,
} from 'rxjs/operators';
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
  sb$: Subject<any> = new Subject();
  data$: any = this.menu5service.pageData(this.reqArr);

  ngOnInit(): void {
    let that = this;
    this.sb$.subscribe((resp: any) => {
      that.sub(resp[0], resp[1]);
    });
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
  save$: Observable<any> = this.getsave();
  getsave() {
    let that = this;
    let req1 = {
      posts: 'https://jsonplaceholder.typicode.com/posts',
      comments: 'https://jsonplaceholder.typicode.com/comments',
      albums: 'https://jsonplaceholder.typicode.com/albums',
      todos: 'https://jsonplaceholder.typicode.com/todos',
      users: 'https://jsonplaceholder.typicode.com/users',
    };
    let req2 = {
      users1: 'https://jsonplaceholder.typicode.com/users/1',
      users2: 'https://jsonplaceholder.typicode.com/users/2',
      users3: 'https://jsonplaceholder.typicode.com/users/3',
      users4: 'https://jsonplaceholder.typicode.com/users/4',
      users5: 'https://jsonplaceholder.typicode.com/users/5',
      users6: 'https://jsonplaceholder.typicode.com/users/6',
      users7: 'https://jsonplaceholder.typicode.com/users/7',
    };
    let req3 = {
      users8: 'https://jsonplaceholder.typicode.com/users/8',
      users9: 'https://jsonplaceholder.typicode.com/users/9',
      users10: 'https://jsonplaceholder.typicode.com/users/10',
    };

    let dt: any = [];
    return that.menu5service.pageData(req1).pipe(
      concatMap((d) => {
        dt.push(d);
        console.log('abovedata 1=>', d);
        return that.menu5service.pageData(req2);
      }),
      concatMap((d) => {
        dt.push(d);
        console.log('abovedata 2=>', d);
        return that.menu5service.pageData(req3);
      }),
      map((d) => {
        dt.push(d);
        return dt;
      }),
      finalize(() => {
        dt = [];
      })
    );
  }
  sub(data: Observable<any>, pageData: any) {
    let reqArr = {
      posttest: [
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: 'dhananjay' + new Date().getTime(),
          body: 'belhekar' + new Date().getTime(),
          email: 'dhananjaybelhekar@gmail.com' + new Date().getTime(),
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
          title: 'foo' + new Date().getTime(),
          body: 'bar' + new Date().getTime(),
          userId: 1,
        },
      ],
    };
    let that = this;
    console.log('pageData =>', pageData);
    data.subscribe((resp) => {
      console.log('=>', resp);
      that.data$ = this.menu5service.pageData(reqArr);
    });
  }
}
