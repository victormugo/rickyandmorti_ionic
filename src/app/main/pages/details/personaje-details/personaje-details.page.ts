import { Component, Input, OnInit } from '@angular/core';
import { PersonajeDetailsService } from './personaje-details.service';
import { IPersonaje } from 'src/app/core/interfaces/personajes.interface';

@Component({
  selector: 'app-personaje-details',
  templateUrl: './personaje-details.page.html',
  styleUrls: ['./personaje-details.page.scss'],
})
export class PersonajeDetailsPage implements OnInit {

  public title: string = '';
  public urlBack: string = 'main-tabs/personajes';

  @Input() personaje!: any;

  constructor(
    private _personajeDetailsService: PersonajeDetailsService
  ) { }

  ngOnInit() {
    console.log('personaje en details: ', this.personaje);

  }

  ngOnDestroy() {
    this._personajeDetailsService.destroy();
  }

  public get episodios() {
    return this._personajeDetailsService.episodios;
  }

  ionViewDidEnter() {
    this.title = this.personaje.name;
    this._personajeDetailsService.loadPersonajeDetails(this.personaje);
  }

  public personajeOrigenDetail() {
    this._personajeDetailsService.personajeOrigenDetail(this.personaje);
  }

  public personajeLocalizacionDetail() {
    this._personajeDetailsService.personajeLocalizacionDetail();
  }

  public personajeEpisodiosDetail() {
    this._personajeDetailsService.personajeOrigenDetail(this.personaje);
  }

  public onClickSelectedEpisodio() {
    this._personajeDetailsService.onClickSelectedEpisodio();
  }

  public onClickAction(event: any) {
    if (event) {

      switch (event?.action) {
        case 'navigate':
          this._personajeDetailsService.navigate(event.url);
          break;

        case 'close':
          this._personajeDetailsService.closeModalControl(false);
          break;
      }
    }
  }
}
