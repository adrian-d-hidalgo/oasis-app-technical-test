import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DesertComponent } from './pages/desert/desert.component';
import { ApiModule } from '../api/api.module';

const routes: Routes = [{ path: 'deserts', component: DesertComponent }];

@NgModule({
  declarations: [DesertComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ApiModule],
  exports: [RouterModule],
})
export class DesertRoutingModule {}
