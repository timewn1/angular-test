import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
