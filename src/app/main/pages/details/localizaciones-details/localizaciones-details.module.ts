import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizacionesDetailsPageRoutingModule } from './localizaciones-details-routing.module';

import { LocalizacionesDetailsPage } from './localizaciones-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizacionesDetailsPageRoutingModule
  ],
  declarations: [LocalizacionesDetailsPage]
})
export class LocalizacionesDetailsPageModule {}
