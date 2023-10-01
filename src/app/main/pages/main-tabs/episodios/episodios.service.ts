import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IEpisodio } from "src/app/core/interfaces/episodios.interface";
import { EpisodiosInfoService } from "src/app/main/services/episodios-info.service";

@Injectable({ providedIn: 'root' })
export class EpisodiosService {

    private destroyed$ = new Subject<void>();

    public episodios: any[] = [];
   
    constructor(
        private _episodiosService: EpisodiosInfoService
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    public loadEpisodios() {
        this._episodiosService.getEpisodiosInfo()
            .then((result: IEpisodio) => {
                this.episodios = result.results;

                console.log('this.episodios: ',this.episodios);
            }).catch((error: any) => {

            });
    }
}