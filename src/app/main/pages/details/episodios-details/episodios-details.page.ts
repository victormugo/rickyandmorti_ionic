import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EpisodiosDetailsService } from './episodios-details.service';
import { IResultsP } from 'src/app/core/interfaces/personajes.interface';

@Component({
  selector: 'app-episodios-details',
  templateUrl: './episodios-details.page.html',
  styleUrls: ['./episodios-details.page.scss'],
})
export class EpisodiosDetailsPage implements OnInit, OnDestroy {

  public title: string = '';
  public urlBack: string = 'main-tabs/personajes';

  @Input() episodio!: any;

  constructor(
    private _episodiosDetailsService: EpisodiosDetailsService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._episodiosDetailsService.destroy();
  }

  ionViewDidEnter() {
    this.title = this.episodio.name;
    this._episodiosDetailsService.loadLocalizacionDetails(this.episodio);
  }

  public get personajes() {
    return this._episodiosDetailsService.personajes;
  }

  /**
   * Abre modal para mostrar la información del personaje seleccionado
   */
  public onClickSelectedPersonaje(personaje: IResultsP) {
    this._episodiosDetailsService.onClickSelectedPersonaje(personaje);
  }

  public onClickAction(event: any) {
    if (event) {

      switch (event?.action) {
        case 'navigate':
          this._episodiosDetailsService.navigate(event.url);
          break;

        case 'close':
          this._episodiosDetailsService.closeModalControl(false);
          break;
      }
    }
  }


}
