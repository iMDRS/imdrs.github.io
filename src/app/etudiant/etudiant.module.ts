import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';


@NgModule({
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ],
  declarations: [EtudiantComponent],
  exports :[EtudiantComponent]
})
export class EtudiantModule { }
