import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { IResultsL } from "src/app/core/interfaces/localizaciones.interface";
import { IResultsP } from "src/app/core/interfaces/personajes.interface";
import { MessagesService } from "src/app/core/services/messages";
import { PersonajeDetailsPage } from "../personaje-details/personaje-details.page";
import { LocalizacionesInfoService } from "src/app/main/services/localizaciones-info.service";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";

@Injectable({ providedIn: 'root' })
export class LocalizacionesDetailsService {

    private destroyed$ = new Subject<void>();

    public personajes: IResultsP[] = [];

    constructor(
        private _localizacionesInfoService: LocalizacionesInfoService,
        private _personajesInfoService: PersonajesInfoService,
        private _messagesService: MessagesService,
        private _modalCtrl: ModalController,
        private _navControl: NavController
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    /**
     * Método para solicitar al servidor el listado de personajes
     */
    public loadLocalizacionDetails(localizacion: IResultsL) {
        this.personajes = [];

        this._localizacionesInfoService.getLocalizacionInfo(localizacion.id)
            .then(async(localizacionData: IResultsL) => {

                // Solicitar listado de personajes en listado bucle
                for (let personaje of localizacionData.residents) {
                    let result = await this._personajesInfoService.getPersonajeInfoDetail(personaje);
                    this.personajes.push(result);
                }

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);
            });
    }

    /**
     * Abrir modal para mostrar la información del personaje seleccionado
     */
    public async onClickSelectedPersonaje(personaje: IResultsP) {
        const modal = await this._modalCtrl.create({
            component: PersonajeDetailsPage,
            componentProps: { personaje },
            id: 'PersonajeDetailsPage'
        });
        modal.present();

        let response = await modal.onWillDismiss();
    }

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