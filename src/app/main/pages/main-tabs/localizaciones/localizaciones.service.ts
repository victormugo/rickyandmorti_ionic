import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ILocalizaciones } from "src/app/core/interfaces/localizaciones.interface";
import { LocalizacionesInfoService } from "src/app/main/services/localizaciones-info.service";

@Injectable({ providedIn: 'root' })
export class LocalizacionesService {

    private destroyed$ = new Subject<void>();

    public localizaciones: any[] = [];
   
    constructor(
        private _localizacionesInfoService: LocalizacionesInfoService
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    public loadLocalizaciones() {
        this._localizacionesInfoService.getLocalizacionesInfo()
            .then((result: ILocalizaciones) => {
                this.localizaciones = result.results;

                console.log('this.localizaciones: ',this.localizaciones);
            }).catch((error: any) => {

            });
    }
}