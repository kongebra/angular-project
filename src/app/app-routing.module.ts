import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLayoutComponent } from '@core/layout/blog-layout/blog-layout.component';
import { AdminLayoutComponent } from '@core/layout/admin-layout/admin-layout.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path: '',
    component: BlogLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@features/blog/blog.module').then(m => m.BlogModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@features/admin/admin.module').then(m => m.AdminModule),
      },
    ],
  },

  // { path: 'login', component: null },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
