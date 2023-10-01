import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LocalizacionesInfoService } from "src/app/main/services/localizaciones-info.service";

@Injectable({ providedIn: 'root' })
export class LocalizacionesService {

    private destroyed$ = new Subject<void>();

    public localizaciones: any[] = []
   
    constructor(
        private _localizacionesInfoService: LocalizacionesInfoService
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    public loadLocalizaciones() {
        this._localizacionesInfoService.getLocalizacionesInfo()
            .then((result: any[]) => {
                this.localizaciones = result;

                console.log('this.localizaciones: ',this.localizaciones);
            }).catch((error: any) => {

            });
    }
}