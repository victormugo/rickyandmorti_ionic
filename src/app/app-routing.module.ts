import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/pages/main-tabs/main-tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'personaje-details',
    loadChildren: () => import('./main/pages/details/personaje-details/personaje-details.module').then( m => m.PersonajeDetailsPageModule)
  },
  {
    path: 'localizaciones-details',
    loadChildren: () => import('./main/pages/details/localizaciones-details/localizaciones-details.module').then( m => m.LocalizacionesDetailsPageModule)
  },
  {
    path: 'episodios-details',
    loadChildren: () => import('./main/pages/details/episodios-details/episodios-details.module').then( m => m.EpisodiosDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
