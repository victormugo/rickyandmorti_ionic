import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LocalizacionesDetailsService } from './localizaciones-details.service';
import { IResultsP } from 'src/app/core/interfaces/personajes.interface';

@Component({
  selector: 'app-localizaciones-details',
  templateUrl: './localizaciones-details.page.html',
  styleUrls: ['./localizaciones-details.page.scss'],
})
export class LocalizacionesDetailsPage implements OnInit, OnDestroy {

  public title: string = '';
  public urlBack: string = 'main-tabs/personajes';

  @Input() localizacion!: any;

  constructor(
    private _localizacionesDetailService: LocalizacionesDetailsService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._localizacionesDetailService.destroy();
  }

  ionViewDidEnter() {
    this.title = this.localizacion.name;
    this._localizacionesDetailService.loadLocalizacionDetails(this.localizacion);
  }

  public get personajes() {
    return this._localizacionesDetailService.personajes;
  }

  /**
   * Abre modal para mostrar la información del personaje seleccionado
   */
  public onClickSelectedPersonaje(personaje: IResultsP) {
    this._localizacionesDetailService.onClickSelectedPersonaje(personaje);
  }

  public onClickAction(event: any) {
    if (event) {

      switch (event?.action) {
        case 'navigate':
          this._localizacionesDetailService.navigate(event.url);
          break;

        case 'close':
          this._localizacionesDetailService.closeModalControl(false);
          break;
      }
    }
  }

}
