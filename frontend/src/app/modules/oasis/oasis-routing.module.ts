import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OasisComponent } from './pages/oasis/oasis.component';
import { DesertModule } from '../desert/desert.module';

const routes: Routes = [{ path: 'oases', component: OasisComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DesertModule,
  ],
  declarations: [OasisComponent],
  exports: [RouterModule],
})
export class OasisRoutingModule {}
