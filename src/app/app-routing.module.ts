import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/pages/home.module').then(m => m.HomeModule) }, { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) }, { path: 'not', loadChildren: () => import('./components/pages/fotFound/not-found/not-found.module').then(m => m.NotFoundModule) }, { path: 'character-list', loadChildren: () => import('./components/pages/characters/charactes-list/charactes-list.module').then(m => m.CharactesListModule) }, { path: 'character-details', loadChildren: () => import('./components/pages/characters/charactes-details/charactes-details.module').then(m => m.CharactesDetailsModule) }, { path: 'about', loadChildren: () => import('./components/pages/about/about/about.module').then(m => m.AboutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
