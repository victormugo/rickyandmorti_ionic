import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { IPersonaje } from "src/app/core/interfaces/personajes.interface";
import { MessagesService } from "src/app/core/services/messages";
import { EpisodiosInfoService } from "src/app/main/services/episodios-info.service";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";
import { LocalizacionesPage } from "../../main-tabs/localizaciones/localizaciones.page";

@Injectable({ providedIn: 'root' })
export class PersonajeDetailsService {

    private destroyed$ = new Subject<void>();

    public personajes: any[] = [];
    public episodios: any[] = [];

    constructor(
        private _personajesInfoService: PersonajesInfoService,
        private _episodiosInfoService: EpisodiosInfoService,
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

        this._personajesInfoService.getPersonajeInfo(personaje.id)
            .then(async(result: IPersonaje) => {
                this.personajes = result.results;

                // Solicitar listado de episodios enlistado bucle
                for (let episode of personaje.episode) {
                    let result = await this._episodiosInfoService.getEpisodioInfoDetail(episode);
                    this.episodios.push(result);
                }

                // Añadir en el array de episodios la información
                this._episodiosInfoService.getEpisodiosInfo()

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);
            });
    }

    public personajeOrigenDetail(personaje: IPersonaje) {
        // Abrir modal de la localización correspondiente

    }

    public personajeLocalizacionDetail() {
        // Abrir modal de la localización correspondiente
    }

    public personajeEpisodiosDetail(personaje: IPersonaje) {
        // Abrir modal del episodio correspondiente
    }

    public onClickSelectedEpisodio() {

    }

    private async _openModalLocation() {
        /*const modal = await this._modalCtrl.create({
            component: LocalizacionesPage,
            componentProps: { personaje },
            id: 'PersonajeDetailsPage'
        });
        modal.present();

        let response = await modal.onWillDismiss();*/
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