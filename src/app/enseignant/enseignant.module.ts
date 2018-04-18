import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';

@NgModule({
  imports: [
    CommonModule,
    EnseignantRoutingModule
  ],
  declarations: [EnseignantComponent]
})
export class EnseignantModule { }
