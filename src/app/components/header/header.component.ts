import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  links: Array<any> = [{
    label: 'Home',
    link: '/dashboard',
  }, {
    label: 'Users',
    link: '/users',
  }];
  activeLink: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activeLink = this.router.url;
  }

}
