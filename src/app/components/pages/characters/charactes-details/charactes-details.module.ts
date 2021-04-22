import { CharactesCardModule } from './../charactes-card/charactes-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactesDetailsRoutingModule } from './charactes-details-routing.module';
import { CharactesDetailsComponent } from './charactes-details.component';


@NgModule({
  declarations: [CharactesDetailsComponent],
  imports: [
    CommonModule,
    CharactesDetailsRoutingModule,
    CharactesCardModule
  ]
})
export class CharactesDetailsModule { }
