import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactesDetailsComponent } from './charactes-details.component';

const routes: Routes = [{ path: '', component: CharactesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactesDetailsRoutingModule { }
