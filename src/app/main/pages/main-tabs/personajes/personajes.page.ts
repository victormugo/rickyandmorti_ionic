import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './personajes.service';

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
  }

}
