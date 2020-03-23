import { Component, OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu.service';
import { Menu } from '@core/models/menu.model';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {
  private readonly menuSlug = 'admin-menu';
  menu: Menu;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuBySlug(this.menuSlug).subscribe(result => {
      if (result.length === 1) {
        this.menu = result[0];
      }
    });
  }
}
