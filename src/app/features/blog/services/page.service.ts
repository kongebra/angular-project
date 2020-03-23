import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private readonly api = environment.api.page;

  constructor(private http: HttpClient) {}
}
