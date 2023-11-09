import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from './modules/common/common.module';
import { DesertModule } from './modules/desert/desert.module';
import { OasisModule } from './modules/oasis/oasis.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, DesertModule, OasisModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
