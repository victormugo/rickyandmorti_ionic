import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizacionesDetailsPageRoutingModule } from './localizaciones-details-routing.module';

import { LocalizacionesDetailsPage } from './localizaciones-details.page';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizacionesDetailsPageRoutingModule,
    HeaderComponent
  ],
  declarations: [LocalizacionesDetailsPage]
})
export class LocalizacionesDetailsPageModule {}
