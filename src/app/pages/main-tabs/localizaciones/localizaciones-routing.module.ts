import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizacionesPage } from './localizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizacionesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizacionesPageRoutingModule {}
