import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalizacionesPage } from './localizaciones.page';

import { LocalizacionesPageRoutingModule } from './localizaciones-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LocalizacionesPageRoutingModule,
    HeaderComponent
  ],
  declarations: [LocalizacionesPage]
})
export class LocalizacionesPageModule {}
