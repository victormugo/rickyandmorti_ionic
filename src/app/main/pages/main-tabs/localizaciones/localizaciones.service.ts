import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { ILocalizaciones, IResultsL } from "src/app/core/interfaces/localizaciones.interface";
import { MessagesService } from "src/app/core/services/messages";
import { LocalizacionesInfoService } from "src/app/main/services/localizaciones-info.service";
import { LocalizacionesDetailsPage } from "../../details/localizaciones-details/localizaciones-details.page";

@Injectable({ providedIn: 'root' })
export class LocalizacionesService {

    private destroyed$ = new Subject<void>();

    public localizaciones: any[] = [];
   
    constructor(
        private _localizacionesInfoService: LocalizacionesInfoService,
        private _messagesService: MessagesService,
        private _modalCtrl: ModalController,
        private _navControl: NavController
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    /**
     * Mñetodo para cargar listado de localizaciones
     */
    public loadLocalizaciones() {
        this._localizacionesInfoService.getLocalizacionesInfo()
            .then((result: ILocalizaciones) => {
                this.localizaciones = result.results;

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);
            });
    }

    /**
     * Método para abrir modal con la localización seleccionada
     * @param localizacion Localización seleccionada
     */
    public async onClickSelectedLocalizacion(localizacion: IResultsL) {
        const modal = await this._modalCtrl.create({
            component: LocalizacionesDetailsPage,
            componentProps: { localizacion },
            id: 'LocalizacionesDetailsPage'
        });
        modal.present();

        let response = await modal.onWillDismiss();
    }

    /**
     * Método para cerrar modal
     * @param close Cerrar modal
     */
    public async closeModalControl(close: boolean) {
        this._modalCtrl.dismiss(close,'','LocalizacionesDetailsPage');
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