import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesService } from './core/services/messages';
import { HttpService } from './core/services/http.service';
import { AbstractHttpService } from './core/services/abstract-http.service';
import { EpisodiosService } from './main/pages/main-tabs/episodios/episodios.service';
import { LocalizacionesService } from './main/pages/main-tabs/localizaciones/localizaciones.service';
import { PersonajesService } from './main/pages/main-tabs/personajes/personajes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MessagesService,
    HttpService,
    AbstractHttpService,
    EpisodiosService,
    LocalizacionesService,
    PersonajesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
