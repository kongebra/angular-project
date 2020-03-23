import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BlogHeaderComponent } from './layout/blog-header/blog-header.component';
import { BlogFooterComponent } from './layout/blog-footer/blog-footer.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BlogLayoutComponent,
    AdminLayoutComponent,
    BlogHeaderComponent,
    BlogFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
  ],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    // vendor
    RouterModule,

    // layouts
    BlogLayoutComponent,
    AdminLayoutComponent,
  ],
})
export class CoreModule {}
