import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeDetailsPage } from './personaje-details.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeDetailsPageRoutingModule {}
