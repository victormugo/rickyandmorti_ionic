import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesPage } from './personajes.page';

import { PersonajesPageRoutingModule } from './personajes-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PersonajesPageRoutingModule,
    HeaderComponent
  ],
  declarations: [PersonajesPage]
})
export class PersonajesPageModule {}
