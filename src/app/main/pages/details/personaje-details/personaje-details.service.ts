import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { IResultsE } from "src/app/core/interfaces/episodios.interface";
import { IPersonaje, IResultsP } from "src/app/core/interfaces/personajes.interface";
import { MessagesService } from "src/app/core/services/messages";
import { EpisodiosInfoService } from "src/app/main/services/episodios-info.service";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";
import { EpisodiosDetailsPage } from "../episodios-details/episodios-details.page";
import { LocalizacionesDetailsPage } from "../localizaciones-details/localizaciones-details.page";
import { LocalizacionesInfoService } from "src/app/main/services/localizaciones-info.service";
import { IResultsL } from "src/app/core/interfaces/localizaciones.interface";

@Injectable({ providedIn: 'root' })
export class PersonajeDetailsService {

    private destroyed$ = new Subject<void>();

    public episodios: IResultsE[] = [];

    constructor(
        private _personajesInfoService: PersonajesInfoService,
        private _episodiosInfoService: EpisodiosInfoService,
        private _localizacionInfoService: LocalizacionesInfoService,
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
    public loadPersonajeDetails(personaje: any) {
        this.episodios = [];

        this._personajesInfoService.getPersonajeInfo(personaje.id)
            .then(async(personajeData: IResultsP) => {

                // Solicitar listado de episodios enlistado bucle
                for (let episode of personajeData.episode) {
                    let result = await this._episodiosInfoService.getEpisodioInfoDetail(episode);
                    this.episodios.push(result);
                }

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);
            });
    }

    /**
     * Solciitar al servidor información de la localización del personaje
     * @param personaje Información del personaje seleccionado
     */
    public async personajeOrigenDetail(personaje: IResultsP) {
        // Solicitar al servidor información sobre la localización origen del personaje

        this._localizacionInfoService.getLocalizacionInfoDetail(personaje.origin.url)
            .then((localizacionData: IResultsL) => {
                // Abrir modal con la información de la localizacion detail

                this._openModalLocation(localizacionData);

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);

            });
    }

    /**
     * Solciitar al servidor información de la localización del personaje
     * @param personaje Información del personaje seleccionado
     */
    public async personajeLocalizacionDetail(personaje: IResultsP) {
        // Solicitar al servidor información sobre la localización del personaje

        this._localizacionInfoService.getLocalizacionInfoDetail(personaje.location.url)
            .then(async (localizacionData: IResultsL) => {
                // Abrir modal con la información de la localizacion detail 

                this._openModalLocation(localizacionData);

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);

            });
    }

    private async _openModalLocation(localizacionData: IResultsL) {

        const modal = await this._modalCtrl.create({
            component: LocalizacionesDetailsPage,
            componentProps: { localizacion: localizacionData },
            id: 'LocalizacionesDetailsPage'
        });
        modal.present();

        let response = await modal.onWillDismiss();

    }

    /**
     * Abrir modal de la pantalla de listado de episodios
     */
    public async onClickSelectedEpisodio(episodio: IResultsE) {
        const modal = await this._modalCtrl.create({
            component: EpisodiosDetailsPage,
            componentProps: { episodio },
            id: 'EpisodiosDetailsPage'
        });
        modal.present();

        let response = await modal.onWillDismiss();
    }

    public async closeModalControl(close: boolean) {
        this._modalCtrl.dismiss(close,'','PersonajeDetailsPage');
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