import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactesListComponent } from './charactes-list.component';

const routes: Routes = [{ path: '', component: CharactesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactesListRoutingModule { }
