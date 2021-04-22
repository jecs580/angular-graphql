import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'', redirectTo:'character-list', pathMatch:'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./components/pages/episodes/episodes.module').then(
        (m) => m.EpisodesModule
      ),
  },
  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/charactes-list/charactes-list.module'
      ).then((m) => m.CharactesListModule),
  },
  {
    path: 'character-details/:id',
    loadChildren: () =>
      import(
        './components/pages/characters/charactes-details/charactes-details.module'
      ).then((m) => m.CharactesDetailsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/pages/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/pages/notFound/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
