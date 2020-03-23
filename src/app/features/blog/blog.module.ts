import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, NotFoundComponent],
  imports: [SharedModule, BlogRoutingModule],
})
export class BlogModule {}
