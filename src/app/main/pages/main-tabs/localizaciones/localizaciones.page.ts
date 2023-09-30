import { Component, OnInit } from '@angular/core';
import { LocalizacionesService } from './localizaciones.service';

@Component({
  selector: 'app-localizaciones',
  templateUrl: 'localizaciones.page.html',
  styleUrls: ['localizaciones.page.scss']
})
export class LocalizacionesPage implements OnInit{

  constructor(
    private _localizacionesService: LocalizacionesService
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this._localizacionesService.destroy();
  }

  ionViewDidEnter() {
  }
}