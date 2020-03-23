import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
