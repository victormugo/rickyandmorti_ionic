import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizacionesDetailsPage } from './localizaciones-details.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizacionesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizacionesDetailsPageRoutingModule {}
