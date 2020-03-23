import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from '@core/services/menu.service';

import { Menu, MenuLink } from '@core/models/menu.model';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent implements OnInit {
  @Input() color = 'primary';

  private readonly menuSlug = 'blog-menu';
  menu: Menu;
  links: MenuLink[];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuBySlug(this.menuSlug).subscribe(result => {
      if (result.length === 1) {
        this.menu = result[0];
        this.links = this.menu.links[0];
      }
    });
  }
}
