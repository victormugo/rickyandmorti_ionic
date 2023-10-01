import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IPersonaje } from "src/app/core/interfaces/personajes.interface";
import { PersonajesInfoService } from "src/app/main/services/personajes-info.service";

@Injectable({ providedIn: 'root' })
export class PersonajesService {

    private destroyed$ = new Subject<void>();

    public personajes: any[] = [];

    constructor(
        private _personajesInfoService: PersonajesInfoService
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    public loadPersonajes() {
        this._personajesInfoService.getPersonajesInfo()
            .then((result: IPersonaje[]) => {
                this.personajes = result;

                console.log('this.personajes: ',this.personajes);
            }).catch((error: any) => {

            });
    }
}