import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from './episodios.service';
import { IResultsE } from 'src/app/core/interfaces/episodios.interface';

@Component({
  selector: 'app-episodios',
  templateUrl: 'episodios.page.html',
  styleUrls: ['episodios.page.scss']
})
export class EpisodiosPage implements OnInit{

  public title: string = 'Episodios';
  public urlBack: string = 'main-tabs/personajes';

  constructor(
    private _episodiosService: EpisodiosService
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this._episodiosService.destroy();
  }

  ionViewDidEnter() {
    this._episodiosService.loadEpisodios();
  }

  public get episodios() {
    return this._episodiosService.episodios;
  }

  /**
   * Abrir modal para mostrar la información del episodio seleccionado
   * @param episodio Episodio seleccionado
   */
  public onClickSelectedEpisodio(episodio: IResultsE) {
    this._episodiosService.onClickSelectedEpisodio(episodio);
  }

  public onClickAction(event: any) {
    if (event) {

      switch (event?.action) {
        case 'navigate':
          this._episodiosService.navigate(event.url);
          break;

        case 'close':
          this._episodiosService.closeModalControl(false);
          break;
      }
    }
  }


}
