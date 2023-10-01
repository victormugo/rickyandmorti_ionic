import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPersonaje } from "src/app/core/interfaces/personajes.interface";
import { MessagesService } from "src/app/core/services/messages";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";

@Injectable({ providedIn: 'root' })
export class PersonajesService {

    private destroyed$ = new Subject<void>();

    public personajes: any[] = [];

    constructor(
        private _personajesInfoService: PersonajesInfoService,
        private _messagesService: MessagesService
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
    public onClickSelectedPersonaje(personaje: IPersonaje) {
        console.log('personaje', personaje)

    }
}