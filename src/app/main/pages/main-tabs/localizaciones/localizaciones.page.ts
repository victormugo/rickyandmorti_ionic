import { Component, OnInit } from '@angular/core';
import { LocalizacionesService } from './localizaciones.service';
import { ILocalizaciones, IResultsL } from 'src/app/core/interfaces/localizaciones.interface';

@Component({
  selector: 'app-localizaciones',
  templateUrl: 'localizaciones.page.html',
  styleUrls: ['localizaciones.page.scss']
})
export class LocalizacionesPage implements OnInit{

  public title: string = 'Localizaciones';
  public urlBack: string = 'main-tabs/personajes';

  constructor(
    private _localizacionesService: LocalizacionesService
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this._localizacionesService.destroy();
  }

  ionViewDidEnter() {
    this._localizacionesService.loadLocalizaciones();
  }

  public get localizaciones() {
    return this._localizacionesService.localizaciones;
  }

  /**
   * Abre modal para mostrar información de la localización seleccionada
   * @param localizacion Localización seleccionada
   */
  public onClickSelectedLocalizacion(localizacion: IResultsL) {
    this._localizacionesService.onClickSelectedLocalizacion(localizacion);
  }

  public onClickAction(event: any) {
    if (event) {

      switch (event?.action) {
        case 'navigate':
          this._localizacionesService.navigate(event.url);
          break;

        case 'close':
          this._localizacionesService.closeModalControl(false);
          break;
      }
    }
  }

}
