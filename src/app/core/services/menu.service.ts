import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Menu } from '@core/models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly api = environment.api.menu;

  constructor(private http: HttpClient) {}

  getAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.api);
  }

  getMenu(id: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.api}/${id}`);
  }

  getMenuBySlug(slug: string): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.api}?slug=${slug}`);
  }

  postMenu(menu: Menu): Observable<any> {
    this.getMenuBySlug(menu.slug).subscribe(result => {
      if (!result) {
        this.http.post(`${this.api}`, menu);
      }
    });

    return of(menu);
  }
}
