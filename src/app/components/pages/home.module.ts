import { CharactesCardModule } from './characters/charactes-card/charactes-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { CharactesCardComponent } from './characters/charactes-card/charactes-card.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactesCardModule
  ]
})
export class HomeModule { }
