import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menuone',
  templateUrl: './menuone.component.html',
  styleUrls: ['./menuone.component.scss'],
})
export class MenuoneComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  news: any = {};
  ngOnInit(): void {
    this.news = this.route.snapshot.data['data'];
    console.log('this.news=>', this.news);
  }
}
