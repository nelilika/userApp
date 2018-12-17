import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  links: Array<any> = [{
    label: 'Home',
    link: '',
  }, {
    label: 'Users',
    link: './users',
  }];
  activeLink = this.links[0].label;

  constructor() { }

  ngOnInit() {
  }

}
