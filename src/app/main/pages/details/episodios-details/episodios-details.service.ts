import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { IResultsE } from "src/app/core/interfaces/episodios.interface";
import { IResultsP } from "src/app/core/interfaces/personajes.interface";
import { MessagesService } from "src/app/core/services/messages";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";
import { PersonajeDetailsPage } from "../personaje-details/personaje-details.page";
import { EpisodiosInfoService } from "src/app/main/services/episodios-info.service";


@Injectable({ providedIn: 'root' })
export class EpisodiosDetailsService {

    private destroyed$ = new Subject<void>();

    public personajes: IResultsP[] = [];

    constructor(
        private _epidosidiosInfoService: EpisodiosInfoService,
        private _personajesInfoService: PersonajesInfoService,
        private _messagesService: MessagesService,
        private _modalCtrl: ModalController,
        private _navControl: NavController
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    public loadLocalizacionDetails(episodio: IResultsE) {
        this.personajes = [];

        this._epidosidiosInfoService.getEpisodioInfo(episodio.id)
            .then(async(episodioData: IResultsE) => {

                // Solicitar listado de personajes en listado bucle
                for (let personaje of episodioData.characters) {
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
        this._modalCtrl.dismiss(close,'','EpisodiosDetailsPage');
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