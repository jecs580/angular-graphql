import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactesCardModule } from './../charactes-card/charactes-card.module';

import { CharactesListRoutingModule } from './charactes-list-routing.module';
import { CharactesListComponent } from './charactes-list.component';


@NgModule({
  declarations: [CharactesListComponent],
  imports: [
    CommonModule,
    CharactesListRoutingModule,
    CharactesCardModule
  ]
})
export class CharactesListModule { }
