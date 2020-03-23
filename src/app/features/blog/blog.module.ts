import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [SharedModule, BlogRoutingModule],
})
export class BlogModule {}
