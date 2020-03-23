import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) }, { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
