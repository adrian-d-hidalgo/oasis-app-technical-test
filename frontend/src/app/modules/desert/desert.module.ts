import { NgModule } from '@angular/core';

import { DesertRoutingModule } from './desert-routing.module';
import { DesertSelectComponent } from './components/desert-select/desert-select.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, DesertRoutingModule],
  declarations: [DesertSelectComponent, DesertSelectComponent],
  exports: [DesertSelectComponent],
})
export class DesertModule {}
