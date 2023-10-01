import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodiosDetailsPage } from './episodios-details.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodiosDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodiosDetailsPageRoutingModule {}
