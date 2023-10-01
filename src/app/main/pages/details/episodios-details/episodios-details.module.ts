import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodiosDetailsPageRoutingModule } from './episodios-details-routing.module';

import { EpisodiosDetailsPage } from './episodios-details.page';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodiosDetailsPageRoutingModule,
    HeaderComponent
  ],
  declarations: [EpisodiosDetailsPage]
})
export class EpisodiosDetailsPageModule {}
