import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss'],
})
export class LayoutSidebarComponent {
  constructor(private router: Router) {}
  public links = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Deserts',
      route: '/deserts',
    },
    {
      title: 'Oases',
      route: '/oases',
    },
  ];

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
