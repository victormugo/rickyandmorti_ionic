import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodiosDetailsPageRoutingModule } from './episodios-details-routing.module';

import { EpisodiosDetailsPage } from './episodios-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodiosDetailsPageRoutingModule
  ],
  declarations: [EpisodiosDetailsPage]
})
export class EpisodiosDetailsPageModule {}
