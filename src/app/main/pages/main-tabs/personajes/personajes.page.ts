import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './personajes.service';
import { IPersonaje } from 'src/app/core/interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: 'personajes.page.html',
  styleUrls: ['personajes.page.scss']
})
export class PersonajesPage implements OnInit {

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

  public onClickSelectedPersonaje(personaje: IPersonaje) {

  }

}
