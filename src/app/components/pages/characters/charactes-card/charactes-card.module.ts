import { RouterModule } from '@angular/router';
import { CharactesCardComponent } from './charactes-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CharactesCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CharactesCardComponent
  ]
})
export class CharactesCardModule { }
