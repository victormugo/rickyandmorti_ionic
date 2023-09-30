import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: 'main-tabs',
    component: MainTabsPage,
    children: [
      {
        path: 'personajes',
        loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesPageModule)
      },
      {
        path: 'localizaciones',
        loadChildren: () => import('./localizaciones/localizaciones.module').then(m => m.LocalizacionesPageModule)
      },
      {
        path: 'episodios',
        loadChildren: () => import('./episodios/episodios.module').then(m => m.EpisodiosPageModule)
      },
      {
        path: '',
        redirectTo: 'main-tabs/personajes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'main-tabs/personajes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
