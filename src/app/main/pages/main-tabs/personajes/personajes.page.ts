import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './personajes.service';
import { IPersonaje } from 'src/app/core/interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: 'personajes.page.html',
  styleUrls: ['personajes.page.scss']
})
export class PersonajesPage implements OnInit {

  public title: string = 'Personajes';
  public urlBack: string = 'main-tabs/personajes';

  constructor(
    private _personajesService: PersonajesService
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this._personajesService.destroy();
  }

  ionViewDidEnter() {
    this._personajesService.loadPersonajes();
  }

  public get personajes() {
    return this._personajesService.personajes;
  }

  /**
   * Método que muestra la información del personaje solicitado
   * @param personaje Información del personaje seleccionado
   */
  public onClickSelectedPersonaje(personaje: IPersonaje) {
    this._personajesService.onClickSelectedPersonaje(personaje);
  }

  public onClickAction(event: any) {
    if (event) {

      switch (event?.action) {
        case 'navigate':
          this._personajesService.navigate(event.url);
          break;

        case 'close':
          this._personajesService.closeModalControl(false);
          break;
      }
    }
  }
}
