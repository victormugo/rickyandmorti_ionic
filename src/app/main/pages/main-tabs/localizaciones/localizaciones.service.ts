import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { ILocalizaciones } from "src/app/core/interfaces/localizaciones.interface";
import { LocalizacionesInfoService } from "src/app/main/services/localizaciones-info.service";

@Injectable({ providedIn: 'root' })
export class LocalizacionesService {

    private destroyed$ = new Subject<void>();

    public localizaciones: any[] = [];
   
    constructor(
        private _localizacionesInfoService: LocalizacionesInfoService,
        private _modalCtrl: ModalController,
        private _navControl: NavController
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

    public async closeModalControl(close: boolean) {
        this._modalCtrl.dismiss(close,'','AlarmsPage');
    }

    /**
     * Método para navegar entre pantallas
     * @param destination pantalla destino
     */
    public navigate(destination: string) {
        this._navControl.navigateForward([destination], {
            queryParams: {}
        });
    }
}