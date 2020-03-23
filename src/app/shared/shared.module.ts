import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    HttpClientModule,

    // material
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    HttpClientModule,

    // material
    // local
  ],
})
export class SharedModule {}
