import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EpisodiosPage } from './episodios.page';

import { EpisodiosPageRoutingModule } from './episodios-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EpisodiosPageRoutingModule,
    HeaderComponent
  ],
  declarations: [EpisodiosPage]
})
export class EpisodiosPageModule {}
