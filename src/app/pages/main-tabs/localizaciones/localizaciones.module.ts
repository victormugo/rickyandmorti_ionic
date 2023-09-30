import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalizacionesPage } from './localizaciones.page';

import { LocalizacionesPageRoutingModule } from './localizaciones-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LocalizacionesPageRoutingModule
  ],
  declarations: [LocalizacionesPage]
})
export class LocalizacionesPageModule {}
