import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesPage } from './personajes.page';

import { PersonajesPageRoutingModule } from './personajes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PersonajesPageRoutingModule
  ],
  declarations: [PersonajesPage]
})
export class PersonajesPageModule {}
