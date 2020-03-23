import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    // local
  ],
})
export class SharedModule {}
