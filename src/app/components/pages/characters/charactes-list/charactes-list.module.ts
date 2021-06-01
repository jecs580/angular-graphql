import { SearchModule } from './../../../../shared/components/search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactesCardModule } from './../charactes-card/charactes-card.module';

import { CharactesListRoutingModule } from './charactes-list-routing.module';
import { CharactesListComponent } from './charactes-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [CharactesListComponent],
  imports: [
    CommonModule,
    CharactesListRoutingModule,
    CharactesCardModule,
    InfiniteScrollModule,
    SearchModule
  ]
})
export class CharactesListModule { }
