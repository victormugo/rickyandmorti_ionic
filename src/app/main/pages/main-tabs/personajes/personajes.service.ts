import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { IPersonaje } from "src/app/core/interfaces/personajes.interface";
import { MessagesService } from "src/app/core/services/messages";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";
import { PersonajeDetailsPage } from "../../details/personaje-details/personaje-details.page";

@Injectable({ providedIn: 'root' })
export class PersonajesService {

    private destroyed$ = new Subject<void>();

    public personajes: any[] = [];

    constructor(
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
    public loadPersonajes() {

        this._personajesInfoService.getPersonajesInfo()
            .then((result: IPersonaje) => {
                this.personajes = result.results;

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);
            });
    }

    /**
     * Método que muestra la información del personaje solicitado
     * @param personaje Devuelve información del personaje seleccionado
     */
    public async onClickSelectedPersonaje(personaje: IPersonaje) {
        const modal = await this._modalCtrl.create({
            component: PersonajeDetailsPage,
            componentProps: { personaje },
            id: 'PersonajeDetailsPage'
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