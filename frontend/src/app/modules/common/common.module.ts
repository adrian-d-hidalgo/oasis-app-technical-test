import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../../app/app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    LayoutComponent,
    LayoutSidebarComponent,
    LayoutContentComponent,
  ],
  exports: [LayoutComponent],
})
export class CommonModule {}
