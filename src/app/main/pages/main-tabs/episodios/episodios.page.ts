import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from './episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: 'episodios.page.html',
  styleUrls: ['episodios.page.scss']
})
export class EpisodiosPage implements OnInit{

  constructor(
    private _episodiosService: EpisodiosService
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this._episodiosService.destroy();
  }

  ionViewDidEnter() {
  }

}