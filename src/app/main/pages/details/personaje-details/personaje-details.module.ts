import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeDetailsPageRoutingModule } from './personaje-details-routing.module';

import { PersonajeDetailsPage } from './personaje-details.page';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajeDetailsPageRoutingModule,
    HeaderComponent
  ],
  declarations: [PersonajeDetailsPage]
})
export class PersonajeDetailsPageModule {}
