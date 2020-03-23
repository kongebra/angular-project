import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BlogHeaderComponent } from './layout/blog-header/blog-header.component';
import { BlogFooterComponent } from './layout/blog-footer/blog-footer.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';

import { MenuService } from './services/menu.service';

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
    FlexLayoutModule,
    HttpClientModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [MenuService],
  exports: [
    // layouts
    BlogLayoutComponent,
    AdminLayoutComponent,
  ],
})
export class CoreModule {}
