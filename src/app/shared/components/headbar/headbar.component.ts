import { Component, OnInit } from '@angular/core';

type RouterLink = {
  activeClass: string;
  link: string;
  label: string;
};

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {
  routerLinks: RouterLink[] = [
    { activeClass: 'uk-active', link: '/home', label: 'Home' },
    { activeClass: 'uk-active', link: '/orders', label: 'Orders' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
