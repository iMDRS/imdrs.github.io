import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageRoutingModule } from './stage-routing.module';
import { StageComponent } from './stage.component';

@NgModule({
  imports: [
    CommonModule,
    StageRoutingModule
  ],
  declarations: [StageComponent]
})
export class StageModule { }
